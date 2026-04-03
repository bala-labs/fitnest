from __future__ import annotations

import re
import datetime as dt
import uuid
from typing import Optional

from pydantic import BaseModel, EmailStr, Field, ConfigDict, field_validator


class UserCreate(BaseModel):
    id: Optional[str] = Field(default=None)
    name: str
    email: EmailStr
    service: str
    phone: str
    city: str

    @field_validator('name', 'service', 'city', mode='before')
    @classmethod
    def strip_required(cls, v: str) -> str:
        v = v.strip()
        if not v:
            raise ValueError('All Fields are required.')
        return v

    @field_validator('id', mode='before')
    @classmethod
    def ensure_uuid_or_none(cls, v: Optional[str]) -> Optional[str]:
        if v is None:
            return None
        v = v.strip()
        if not v:
            return None
        try:
            uuid.UUID(v)
        except Exception as exc:
            raise ValueError('Invalid id.') from exc
        return v

    @field_validator('name')
    @classmethod
    def name_no_digits(cls, v: str) -> str:
        if re.search(r'\d', v):
            raise ValueError('Invalid user name.')
        return v

    @field_validator('phone')
    @classmethod
    def phone_valid(cls, v: str) -> str:
        v = v.strip()
        if not re.fullmatch(r'\d{10}', v):
            raise ValueError('Invalid phone number.')
        return v

    @field_validator('city')
    @classmethod
    def city_no_digits(cls, v: str) -> str:
        if re.search(r'\d', v):
            raise ValueError('Invalid city name.')
        return v

    def with_generated_id(self) -> 'UserCreate':
        if self.id:
            return self
        return self.model_copy(update={'id': str(uuid.uuid4())})


class UserRead(BaseModel):
    id: str
    name: str
    email: str
    service: str
    phone: str
    city: str
    created_at: dt.datetime

    model_config = ConfigDict(from_attributes=True)

