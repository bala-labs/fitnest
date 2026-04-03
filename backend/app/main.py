from __future__ import annotations

import datetime as dt

from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import select
from sqlalchemy.orm import Session
from uuid import UUID

from db import Base, SessionLocal, engine
from models import User
from schemas import UserCreate, UserRead

app = FastAPI(title="FitNest API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db() -> Session:
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.on_event("startup")
def on_startup() -> None:
    Base.metadata.create_all(bind=engine)


@app.get("/users", response_model=list[UserRead])
def list_users(db: Session = Depends(get_db)) -> list[UserRead]:
    result = db.execute(select(User).order_by(User.created_at.desc()))
    users = result.scalars().all()
    return [UserRead.model_validate(u) for u in users]


@app.post("/users", response_model=UserRead, status_code=201)
def create_user(payload: UserCreate, db: Session = Depends(get_db)) -> UserRead:
    user = payload.with_generated_id()

    # `with_generated_id()` guarantees `id` is set, but we keep a guard anyway.
    if not user.id:
        raise ValueError("id is required")
    # Validate UUID format (helps catch bad IDs even if client sends something malformed).
    UUID(user.id)

    db_user = User(
        id=user.id,
        name=user.name,
        email=str(user.email),
        service=user.service,
        phone=user.phone,
        city=user.city,
        created_at=dt.datetime.utcnow(),
    )

    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return UserRead.model_validate(db_user)

