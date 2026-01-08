const serviceList = document.getElementById("list-services");
const registerForm = document.getElementById("registration");

const services = {
    gain : [
        { 
            name: "HIIT Blast",
            description: "Short bursts of high-intensity cardio and bodyweight exercises",
            schedule: "Mon, Wed, Fri - 6:00 AM & 6:30 PM"
        }, 
        {
            name: "Zumba Fit",
            description: "Dance-based cardio workout with fun Latin rhythms",
            schedule: "Tue, Thu - 7:00 AM & 5:30 PM"
        }, 
        {
            name: "Bootcamp Burn",
            description: "Circuit-style training with minimal rest between stations",
            schedule: "Sat - 9:00 AM"
        }
    ],
    loss : [
        {
            name:"Strength Circuit",
            description:"Progressive resistance training targeting major muscle groups",
            schedule: "Mon, Wed, Fri - 7:30 AM & 7:00 PM"
        }, 
        {
            name:"Functional Strength",
            description:"Train movement patterns with compound lifts and loaded carries",
            schedule: "Tue, Thu - 6:00 AM & 6:30 PM"
        }
    ],
    strength : [
        {
            name:"Barbell Club",
            description:"Squats, deadlifts, and bench press with progressive overload",
            schedule: "Sun - 10:00 AM"
        }, 
        {
            name:"Kettlebell Conditioning",
            description:"Dynamic strength and endurance using kettlebells",
            schedule: "Tue, Thu - 7:00 AM & 6:00 PM"
        }, 
        {
            name:"TRX Power Core",
            description:"Suspension training targeting strength and balance",
            schedule: "Mon, Wed - 5:00 PM & 6:00 PM"
        }
    ], 
    personal : [
        {
            name:"1-on-1 Personal Training",
            description:"Work with a coach to build a program for your specific goal",
            schedule: "By appointment, 7 days/week"
        }, 
        {
            name:"Partner Personal Training",
            description:"Train with a friend under the guidance of a trainer",
            schedule: "By appointment"
        }
    ],
    diet : [
        {
            name:"Meal Planning Workshop",
            description:"Group session on structuring meals for fitness goals",
            schedule: "Tue - 8:00 PM (Group Workshop)"
        }, 
        {
            name:"Nutrition 1-on-1 Consultation",
            description:"Private session to design a personalized diet plan",
            schedule: "By appointment"
        }
    ]
};

document.addEventListener("DOMContentLoaded", function(e) {
    e.preventDefault();

    if (registerForm) {
        registerForm.addEventListener("submit", function(e) {
            e.preventDefault();

            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let service = document.getElementById("services").value;
            let phone = document.getElementById("phone").value.trim();
            let city = document.getElementById('city').value.trim();
            let message = document.getElementById("message");
            message.style.color = "red";
            message.style.fontWeight = "bold";
            message.parentElement.style.visibility = "visible";

            if (!name || !email || !service || !phone || !city) {
                message.textContent = "All Fields are required.";
                return;
            }

            if (/\d/.test(name)) {
                message.textContent = "Invalid user name.";
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                message.textContent = "Invalid email address.";
                return;
            }

            if (isNaN(phone) || phone.length !== 10) {
                message.textContent = "Invalid phone number.";
                return;
            }

            if (/\d/.test(city)) {
                message.textContent = "Invalid city name.";
                return;
            }

            let notify = document.getElementById("notification");
            notify.classList.add("active");
            document.querySelector('.para').textContent = `${name}, your details have been accepted by our branch`;

            document.getElementById('confirm').addEventListener('click', function() {
                notify.classList.remove("active");
                registerForm.reset();
                message.textContent = null;
            });
        });
    }

    if (serviceList) {
        function updateSelect() {
            document.querySelector('ul') ? document.querySelector('ul').remove(): null;
            const ul = document.createElement('ul');

            let selection = document.getElementById("list-services").value;      
            const options = selection === "all" ? ['gain', 'loss', 'strength', 'personal', 'diet'] : [selection];

            options.forEach((option) => {
                services[option].forEach((data) => {
                    let li = document.createElement('li');
                    li.id = data;

                    let head = document.createElement('h3');
                    head.textContent = data.name;
                    head.classList.add("class-name");
                    li.appendChild(head);

                    let para = document.createElement('p');
                    para.textContent = data.description;
                    para.classList.add("desc");
                    li.appendChild(para);

                    let div = document.createElement('div');
                    div.classList.add("schedule-container");

                    let schedule = document.createElement('h5');
                    schedule.textContent = data.schedule;
                    div.appendChild(schedule);
                    
                    let anchor = document.createElement('a');
                    anchor.href = "join.html";
                    anchor.textContent = "Join";
                    anchor.classList.add("join-link");
                    div.appendChild(anchor);

                    li.appendChild(div);
                    ul.appendChild(li);
                });
            });
            document.getElementById('classes').appendChild(ul);
        }
            
        updateSelect();

        serviceList.addEventListener("change", function() {
            updateSelect();
        });
    }

    document.querySelector("header h1").addEventListener("click", function() {window.location.href = 'index.html'});
});