
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let cMonth = date.getMonth();
let Currentdate = date.getDate();
let CYear = date.getFullYear();
let day = date.toDateString().slice(0, 3);
let dayNo = date.getDay();

let currentFullDate = Currentdate + "-" + month + "-" + CYear;


let monthsArray = ["January", "Febraury", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let movieData = [
    ["14-8-2001", "2-7-2002", "22-7-2002", "29-10-2002", "27-11-2002", "19-3-2003", "14-6-2023", "10-7-2023", "11-7-2023", "18-7-2023", "25-7-2023", "1-8-2023", "15-8-2023", "22-8-2023", "19-9-2023", "20-9-2023", "24-10-2023", "22-11-2023", "31-11-2023", "12-0-2024", "13-0-2024"],

    ["Itlu Sravani Subramanyam", "Avunu Vallidharu Istapaddaru", "Idiot", "Khadgham", "Anveshana", "Amma Nana O Tamil Ammai", "Baby", "Jailer", "Bhola Shankar", "Yogi (Re-Rls) + Raghuvaran Btech (Re-Rls)", "Gandheevadhari Arjuna", "Kushi", "Skandha + Chandramukhi 2", "Salaar", "Baghavath Kesari + Leo", "Tiger Nageswara Rao", "Devil", "Saindhav + OG", "Venky (Re-Rls)", "Eagle + Hanuman", "Guntur Karam"],

    ["Raviteja, Tanuroy", "Raviteja, Kalyani", "Raviteja, Rakshitha", "Raviteja, Srikanth, Sangeetha", "Raviteja, Radhika Varma", "Raviteja, Asin", "Anandh Devarkonda, Vaishnavi Chaitanya", "Rajinikanth, Ramya Krishna", "Chiranjeevi, Tamannah", "Prabhas, Nayanatara + Dhanush, Amala Paul", "Varun Tej", "Vijay Devarakonda", "Ram, Sree Leela + Raghava Lawrance, Kanganah Rawath", "Prabhas, Shruthi Hassan", "Balakrishna, Kajal, Sree Leela + Vijay, Lokesh Kanakaraj", "Raviteja, Nupur Sanon", "Kalyan Ram", "Venkatesh + Pawan Kalyan, Sree Leela", "Raviteja, Sneha", "Raviteja, Anupama Parameshwaran + Teja Sajja", "Mahesh babu, Sree Leela"]
]

let movieDataM = [
    ["12-0-2023", "13-0-2023", "14-0-2023", "26-0-2023", "26-0-2023", "03-1-2023", "04-1-2023", "04-1-2023", "10-1-2023", "17-1-2023", "18-1-2023", "18-1-2023", "24-1-2023", "03-2-2023", "03-2-2023", "10-2-2023", "17-2-2023", "22-2-2023", "22-2-2023", "30-2-2023", "07-3-2023", "07-3-2023", "14-3-2023", "21-3-2023", "21-3-2023", "21-3-2023", "21-3-2023", "28-3-2023", "28-3-2023", "29-3-2023", "05-4-2023", "05-4-2023", "05-4-2023", "12-4-2023", "12-4-2023", "12-4-2023", "12-4-2023", "12-4-2023", "12-4-2023", "18-4-2023", "19-4-2023", "26-4-2023", "27-4-2023", "02-5-2023", "02-5-2023", "02-5-2023", "02-5-2023", "02-5-2023", "09-5-2023", "09-5-2023", "09-5-2023", "09-5-2023", "09-5-2023", "16-5-2023", "29-5-2023", "29-5-2023", "07-6-2023", "07-6-2023", "07-6-2023", "07-6-2023", "07-6-2023", "07-6-2023", "07-6-2023", "07-6-2023", "14-6-2023", "14-6-2023", "20-6-2023", "21-6-2023", "21-6-2023", "21-6-2023", "21-6-2023", "21-6-2023", "28-6-2023", "29-6-2023", "29-6-2023", "29-6-2023", "04-7-2023", "04-7-2023", "04-7-2023", "04-7-2023", "10-7-2023", "11-7-2023", "12-7-2023", "18-7-2023", "18-7-2023", "18-7-2023", "18-7-2023", "25-7-2023", "01-8-2023", "07-8-2023", "15-8-2023", "15-8-2023", "28-8-2023", "19-9-2023", "19-9-2023", "20-9-2023", "21-11-2023", "22-11-2023", "23-11-2023"],

    ["Veera Simha Reddy", "Waltair Veerayya", "Kalyanam Kamaneeyam", "Hunt", "Valentines Night", "Michael", "Writer Padmabhushan", "Butta Bomma", "Amigos", "Sir", "Vinaro Baaghyamu Vishnu Katha", "Sri Devi Shoban Babu", "Mr. King", "Balagam", "Organic Mama Hybrid Alludu", "CSI Sanatan", "Phalana Abbayi Phalana Ammayi", "Das Ka Dhamki", "Ranga Maarthaanda", "Dasara", "Ravanasura", "Meter", "Shaakuntalam", "10 Rupees", "Hello Meera", "Two Souls", "Virupaksha", "Agent", "Raa Raa Penimiti", "Vidyarthi", "Ramabanam", "Ugram", "Arangetram", "Bhuvana Vijayam", "Katha Venuka Katha", "Custody", "Kalyanamasthu", "Tea Break", "The Story of A Beautiful Girl", "Anni Manchi Sakunamule", "Haseena", "Malli Pelli", "Boo", "Ahimsa", "Chakravyuham: The Trap", "Nenu Student Sir", "Mem Famous", "Pareshan", "Anantha", "Intinti Ramayanam", "Takkar", "Unstoppable (2023 film)", "Vimanam", "Adipurush", "Spy", "Samajavaragamana", "7:11 PM", "Bhaag Saale", "Circle (movie)", "Lily", "Mohankrishnas Gang Leader", "O Saathiya", "Rangabali", "Rudrangi", "Baby", "Revenge", "Hidimbha", "Ala Ila Ela", "Detective Karthik", "Annapurna Photo Studio", "Her - Chapter 1", "Natho Nenu", "Bro", "Okkaroju...48 Hours", "Sakshi", "Slumdog Husband", "Dilse", "Krishna Gadu Ante Oka Range", "Mistake", "Rajugari Kodipulao", "Jailer", "Bhola Shankar", "Ustaad", "Jilebi", "Madhilo Madhi", "Mr. Pregnant", "Prem Kumar", "Gandeevadhari Arjuna", "Kushi", "Miss Shetty Mr Polishetty", "Tillu Square", "Skanda: The Attacker", "Salaar: Part 1 - Ceasefire", "Bhagavanth Kesari", "Leo", "Tiger Nageswara Rao", "Hi Nanna", "Saindhav", "Extra-Ordinary Man"],

    ["Balakrishna, Shruthi Hassan, Honey Rose", "Chiranjeevi, Raviteja, Shruthi Hassan", "Santhosh Shoban, Priya Bhavani", "Sudheer Babu, Srikanth", "Chaitanya Madadi, Lavanya Sahukara", "Sundeep Kishan, Vijay Sethupathi, Divyansha", "Suhas, Tina Shilparaj", "Anikha Surendran, Arjun Das", "Kalyan Ram, Ashika Ranganath", "Dhanush, Samyuktha Menon", "Kiran Abbavaram, Kashmira Pardeshi", "Santhosh Shoban, Gouri G. Kishan", "Sharan Kumar, Yasvika Nishkala", "Priyadarshi, Kavya Kalyanram", "Syed Sohel, Mirnalini Ravi", "Aadi Saikumar, Misha Narang", "Naga Shaurya, Malvika Nair", "Vishwak Sen, Nivetha Pethuraj", "Prakash Raj, Ramya Krishnan", "Nani, Keerthy Suresh", "Ravi Teja, Sushanth", "Kiran Abbavaram, Athulya Ravi", "Samantha Ruth Prabhu, Dev Mohan", "Srikanth Chowtapalli, Pavitra Narayann", "Gargeyi Yellapragada", "Trinadh Varma, Bhavana Sagi", "Sai Dharam Tej, Samyuktha Menon", "Akhil Akkineni, Mammootty, Sakshi Vaidya", "Nandita Swetha", "Chetan Cheenu, Bunny Vox", "Gopichand, Dimple Hayathi", "Allari Naresh, Mirnaa Menon", "Roshan Z, Mustafa Askari", "Sunil, Vasanthi Krishnan", "Viswant Duddumpudi, Srijitha Ghosh", "Naga Chaitanya, Krithi Shetty, Arvind Swamy", "Shekhar Verma, Vaibhavi Rao", "Ravi Kumar Sanapala, Priyanka Augustine", "Madhunandan, Nihal Kodhaty", "Santosh Sobhan, Malvika Nair", "Priyanka Dey, SaiTeja Ganji", "Naresh Pavitra Lokesh", "Rakul Preet Singh, Vishwak Sen, Nivetha Pethuraj", "Abhiram Daggubati, Geethika Tiwary", "Ajay, Gnaneswari Kandregula", "Bellamkonda Ganesh, Avantika Dassani", "Sumanth Prabhas, Saarya", "Thiruveer, Pavani Karnan", "Prashanth Karthi", "Rahul Ramakrishna, Navya Swamy", "Siddharth, Divyansha Kaushik", "VJ Sunny, Saptagiri, Nakshatra", "Samuthirakani, Meera Jasmine", "Prabhas, Kriti Sanon", "Nikhil Siddhartha, Iswarya Menon", "Sree Vishnu, Reba Monica John", "Saahas Pagadala, Deepika Reddy", "Sri Simha Koduri, Neha Solanki", "Sai Ronak, Arshin Mehta", "Neha Kamadari, P. Vedanth Varma", "Singuluri Mohan Krishna, Harini Reddy", "Aryan Gowra, Mishti Chakraborty", "Naga Shaurya, Yukti Thareja", "Jagapati Babu, Mamta Mohandas", "Anand Devarakonda, Vaishnavi Chaitanya", "Babu Pedapudi, Neha Pandey", "Ashwin Babu, Nandita Swetha", "Shakthi Vasudevan, Shamna Kasim", "Rajath Raghav, Goldie Nissy", "Chaitanya Madadi, Lavanya Sahukara", "Ruhani Sharma, Pradeep Rudra", "P. Sai Kumar, Srinivas Sai", "Pawan Kalyan, Sai Dharam Tej, Ketika Sharma", "Aditya Reddy Badveli, Rekha Nirosha", "Sharan Kumar, Janvir Kaur", "Sanjay Rao, Raghu Karumanchi", "Abhinav Medishetti, Sasha Singh", "Rishwi Thimmaraju, Vismaya Sri", "Abhinav Sardhar, Ajay Kathurvar", "Shiva Kona, Neha Deshpande", "Rajinikanth, Ramya Krishna", "Chiranjeevi, Tamannaah, Keerthy Suresh", "Sri Simha Koduri, Kavya Kalyanram", "Sree Kamal, Shivani Rajashekar", "Jai Nemukuri, Sweety Swathi", "Syed Suhel Ryan, Roopa Koduvayur", "Santosh Sobhan, Rashi Singh", "Varun Tej, Sakshi Vaidya", "Vijay Deverakonda, Samantha", "Naveen Polishetty, Anushka Shetty", "Siddu Jonnalagadda, Anupama Parameswaran", "Ram Pothineni, Sree Leela", "Prabhas, Shruti Haasan", "Nandamuri Balakrishna, Kajal Aggarwal, Sree Leela", "Vijay Thalapathy", "Ravi Teja, Nupur Sanon", "Nani, Mrunal Thakur, Shruti Haasan", "Venkatesh Daggubati, Nawazuddin Siddiqui", "Nithiin, Sreeleela"]
]


let outline = document.querySelector(".outline");
let Month_Year_Heading = document.querySelector("#Month_Year_Heading");
let body = document.querySelector(".body");
let monthsBlock = document.querySelector(".monthsBlock");

let row1 = document.querySelector(".row1");
let row2 = document.querySelector(".row2");
let row3 = document.querySelector(".row3");
let row4 = document.querySelector(".row4");
let row5 = document.querySelector(".row5");
let row6 = document.querySelector(".row6");

let monthRow1 = document.querySelector("#monthRow1");
let monthRow2 = document.querySelector("#monthRow2");
let monthRow3 = document.querySelector("#monthRow3");

let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");
let box3 = document.querySelector("#box3");
let box4 = document.querySelector("#box4");
let box5 = document.querySelector("#box5");
let box6 = document.querySelector("#box6");
let box7 = document.querySelector("#box7");
let box8 = document.querySelector("#box8");
let box9 = document.querySelector("#box9");
let box10 = document.querySelector("#box10");
let box11 = document.querySelector("#box11");
let box12 = document.querySelector("#box12");

let info = document.querySelector(".info");
let selectedDate = document.querySelector("#selectedDate");

let listOfMovies = document.querySelector(".listOfMovies");
let listItem = document.querySelector(".listItem");

let monthViewMoviesUL = document.querySelector(".monthViewMoviesUL");
let tip = document.querySelector(".tip");

let HeadingMonth = monthsArray[month];
let HeadingYear = year;
let view = 1;

let count = 0;
let activeBox;
let rangeEnd;
let rangeStart;
let rangeHead;

Month_Year_Heading.innerHTML = HeadingMonth + ", " + year;


function setCurrentDate() {
    let suffex = "th";

    if (date == 1 || date == 21 || date == 31) {
        suffex = "st";
    }
    else if (date == 2 || date == 22) {
        suffex = "nd";
    }
    else if (date == 3 || date == 23) {
        suffex = "rd";
    }
    else {
        suffex = "th";
    }

    fulldateC = Currentdate + suffex + " " + monthsArray[month].slice(0, 3) + " " + year;
    selectedDate.innerHTML = fulldateC;

    return fulldateC;
}

setCurrentDate();


function viewMonths() {
    // Month_Year_Heading.innerHTML == monthsArray[month] + ", " + year
    if (view == 1) {
        outline.style.minHeight = "250px";
        body.style.display = "none";
        info.style.display = "none";
        monthsBlock.style.display = "block";
        Month_Year_Heading.innerHTML = year;
        fillMonthBoxes(year);
        view = 2;
        count = 0;
    }
    else if (Month_Year_Heading.innerHTML == year) {
        fillYears(year);
        view = 3;
        count = 0;
    }
    else {

    }
}

function inc() {
    count++;
    // console.log(count);
    // manageActiveBox();
    if (view == 1) {
        if (month == 11) {
            month = -1;
        }
        if (month == -1) {
            year++;
        }

        month++;
        HeadingMonth = monthsArray[month];
        Month_Year_Heading.innerHTML = HeadingMonth + ", " + year;
        fillDateBoxes(month, year);
        menuView = 0;
        displayMoviesInMonth();
        // console.log("INC M = " + month);
    } else if (view == 2) {
        year++;
        Month_Year_Heading.innerHTML = year;
        fillMonthBoxes(year);
    } else if (view == 3) {
        rangeStart = rangeEnd + 1;
        rangeEnd = rangeEnd + 12;
        rangeHead = rangeStart + " - " + rangeEnd;

        fillYears(rangeStart)
    } else {

    }

}

function dec() {
    count--;
    // console.log(count);
    // manageActiveBox();
    if (view == 1) {
        if (month == 0) {
            month = 12;
        }
        if (month == 12) {
            year--;
            HeadingMonth = monthsArray[month];
            Month_Year_Heading.innerHTML = HeadingMonth + ", " + year;
        }
        if (month == -1) {
            month = 11;
        }
        month--;
        HeadingMonth = monthsArray[month];
        Month_Year_Heading.innerHTML = HeadingMonth + ", " + year;

        fillDateBoxes(month, year)
        menuView = 0;
        displayMoviesInMonth();
        // console.log(month, year)
        // console.log("DEC M = " + month); 
    } else if (view == 2) {
        year--;
        Month_Year_Heading.innerHTML = year;
        fillMonthBoxes(year);
    } else if (view == 3) {
        rangeEnd = rangeStart - 1;
        rangeStart = rangeStart - 12;
        rangeHead = rangeStart + " - " + rangeEnd;

        fillYears(rangeStart);
    } else {

    }

}

function fillMonthBoxes(refyear) {
    let string1 = ""
    for (let i = 0; i <= 3; i++) {
        if (i == cMonth && refyear == CYear) {
            string1 = string1 + "<li onclick='forwardYMMD(this.innerHTML)' class='monthActive'>" + monthsArray[i] + "</li>";
        } else {
            string1 = string1 + "<li onclick='forwardYMMD(this.innerHTML)'>" + monthsArray[i] + "</li>";
        }
    }

    let string2 = ""
    for (let i = 4; i <= 7; i++) {
        if (i == cMonth && refyear == CYear) {
            string2 = string2 + "<li onclick='forwardYMMD(this.innerHTML)' class='monthActive'>" + monthsArray[i] + "</li>";
        } else {
            string2 = string2 + "<li onclick='forwardYMMD(this.innerHTML)'>" + monthsArray[i] + "</li>";
        }
    }

    let string3 = ""
    for (let i = 8; i <= 11; i++) {
        if (i == cMonth && refyear == CYear) {
            string3 = string3 + "<li onclick='forwardYMMD(this.innerHTML)' class='monthActive'>" + monthsArray[i] + "</li>";
        } else {
            string3 = string3 + "<li onclick='forwardYMMD(this.innerHTML)'>" + monthsArray[i] + "</li>";
        }
    }

    monthRow1.innerHTML = string1;
    monthRow2.innerHTML = string2;
    monthRow3.innerHTML = string3;

}

function fillYears(currentYear) {
    let a = 1989;
    let b = currentYear - a;
    let c = Math.floor(b / 12 + 1);
    let d = b % 12 + 1;

    rangeEnd = (a + (12 * c) - 1);
    rangeStart = rangeEnd - 11;
    rangeHead = rangeStart + " - " + rangeEnd;

    Month_Year_Heading.innerHTML = rangeHead;

    // fillYearBoxes(rangeStart, rangeHead);

    let string1 = ""
    for (let i = rangeStart; i <= rangeStart + 3; i++) {
        if (i == CYear) {
            string1 = string1 + "<li onclick='forwardYMMD(this.innerHTML)' class='monthActive'>" + i + "</li>";
        } else {
            string1 = string1 + "<li onclick='forwardYMMD(this.innerHTML)'>" + i + "</li>";
        }
    }

    let string2 = ""
    for (let i = rangeStart + 4; i <= rangeStart + 7; i++) {
        if (i == CYear) {
            string2 = string2 + "<li onclick='forwardYMMD(this.innerHTML)' class='monthActive'>" + i + "</li>";
        } else {
            string2 = string2 + "<li onclick='forwardYMMD(this.innerHTML)'>" + i + "</li>";
        }
    }

    let string3 = ""
    for (let i = rangeStart + 8; i <= rangeStart + 11; i++) {
        if (i == CYear) {
            string3 = string3 + "<li onclick='forwardYMMD(this.innerHTML)' class='monthActive'>" + i + "</li>";
        } else {
            string3 = string3 + "<li onclick='forwardYMMD(this.innerHTML)'>" + i + "</li>";
        }
    }

    monthRow1.innerHTML = string1;
    monthRow2.innerHTML = string2;
    monthRow3.innerHTML = string3;

}

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function fillDateBoxes(month, year) {
    let firstRowStart = new Date(year, month, 1).getDay() + 1;
    let firstRowEnd = 8 - firstRowStart;

    let TotalDaysInMonth = daysInMonth(month + 1, year);
    let TotalDaysInLastMonth = daysInMonth((month), year);

    let emptysInFR = 7 - firstRowEnd;
    let emptysInLR = 35 - TotalDaysInMonth - emptysInFR;

    let array = []
    let MovieMonths = []
    let movieYears = []
    let movieDates = movieData[0]

    let array2 = []

    let dateRef = parseInt(currentFullDate.split("-")[0]);
    let monthRef = parseInt(currentFullDate.split("-")[1]);
    let yearRef = parseInt(currentFullDate.split("-")[2]);

    for (let i = 0; i < movieDates.length; i++) {
        MovieMonths[i] = movieDates[i].split("-")[1];
        movieYears[i] = movieDates[i].split("-")[2];
        if (movieYears[i] == year) {
            if (MovieMonths[i] == month) {
                array[i] = parseInt(movieDates[i].split("-")[0]);
            }
        }
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i]) {
            array2.push(array[i])
        }
    }

    array = array2;
    // console.log(array)

    if (emptysInLR < 0) {
        var string = "";

        for (i = TotalDaysInLastMonth - emptysInFR + 1; i <= TotalDaysInLastMonth; i++) {
            string = string + "<li style='opacity:0.3;'>" + i + "</li>";
        }
        for (i = 1; i <= firstRowEnd; i++) {
            if (array.includes(i)) {
                if (i == dateRef && month == cMonth && year == CYear) {
                    string = string + "<li onclick='checkMovies(this.innerHTML)' class='active'>" + i + "</li>";
                } else {
                    string = string + "<li onclick='checkMovies(this.innerHTML)' style='color:rgb(63, 80, 208);'>" + i + "</li>";
                }

            } else {
                if (i == dateRef && month == cMonth && year == CYear) {
                    string = string + "<li onclick='checkMovies(this.innerHTML)' class='active'>" + i + "</li>";
                } else {
                    string = string + "<li onclick='checkMovies(this.innerHTML)'>" + i + "</li>";
                }
            }
        }

        var string2 = "";
        for (i = (firstRowEnd + 1); i <= firstRowEnd + 7; i++) {

            if (array.includes(i)) {
                if (i == dateRef && month == cMonth && year == CYear) {
                    string2 = string2 + "<li onclick='checkMovies(this.innerHTML)' class='active'>" + i + "</li>";
                } else {
                    string2 = string2 + "<li onclick='checkMovies(this.innerHTML)' style='color:rgb(63, 80, 208);'>" + i + "</li>";
                }

            } else {
                if (i == dateRef && month == cMonth && year == CYear) {
                    string2 = string2 + "<li onclick='checkMovies(this.innerHTML)' class='active'>" + i + "</li>";
                } else {
                    string2 = string2 + "<li onclick='checkMovies(this.innerHTML)'>" + i + "</li>";
                }
            }

        }

        var string3 = "";
        for (i = firstRowEnd + 8; i <= firstRowEnd + 14; i++) {
            if (array.includes(i)) {
                if (i == dateRef && month == cMonth && year == CYear) {
                    string3 = string3 + "<li onclick='checkMovies(this.innerHTML)' class='active'>" + i + "</li>";
                } else {
                    string3 = string3 + "<li onclick='checkMovies(this.innerHTML)' style='color:rgb(63, 80, 208);'>" + i + "</li>";
                }

            } else {
                if (i == dateRef && month == cMonth && year == CYear) {
                    string3 = string3 + "<li onclick='checkMovies(this.innerHTML)' class='active'>" + i + "</li>";
                } else {
                    string3 = string3 + "<li onclick='checkMovies(this.innerHTML)'>" + i + "</li>";
                }
            }

        }

        var string4 = "";
        for (i = firstRowEnd + 15; i <= firstRowEnd + 21; i++) {
            if (array.includes(i)) {
                if (i == dateRef && month == cMonth && year == CYear) {
                    string4 = string4 + "<li onclick='checkMovies(this.innerHTML)' class='active'>" + i + "</li>";
                } else {
                    string4 = string4 + "<li onclick='checkMovies(this.innerHTML)' style='color:rgb(63, 80, 208);'>" + i + "</li>";
                }

            } else {
                if (i == dateRef && month == cMonth && year == CYear) {
                    string4 = string4 + "<li onclick='checkMovies(this.innerHTML)' class='active'>" + i + "</li>";
                } else {
                    string4 = string4 + "<li onclick='checkMovies(this.innerHTML)'>" + i + "</li>";
                }
            }
        }

        var string5 = "";
        for (i = firstRowEnd + 22; i <= firstRowEnd + 28; i++) {
            if (array.includes(i)) {
                if (i == dateRef && month == cMonth && year == CYear) {
                    string5 = string5 + "<li onclick='checkMovies(this.innerHTML)' class='active'>" + i + "</li>";
                } else {
                    string5 = string5 + "<li onclick='checkMovies(this.innerHTML)' style='color:rgb(63, 80, 208);'>" + i + "</li>";
                }

            } else {
                if (i == dateRef && month == cMonth && year == CYear) {
                    string5 = string5 + "<li onclick='checkMovies(this.innerHTML)' class='active'>" + i + "</li>";
                } else {
                    string5 = string5 + "<li onclick='checkMovies(this.innerHTML)'>" + i + "</li>";
                }
            }
        }

        var string6 = "";
        for (i = firstRowEnd + 29; i <= TotalDaysInMonth; i++) {
            if (array.includes(i)) {
                if (i == dateRef && month == cMonth && year == CYear) {
                    string6 = string6 + "<li onclick='checkMovies(this.innerHTML)' class='active'>" + i + "</li>";
                } else {
                    string6 = string6 + "<li onclick='checkMovies(this.innerHTML)' style='color:rgb(63, 80, 208);'>" + i + "</li>";
                }

            } else {
                if (i == dateRef && month == cMonth && year == CYear) {
                    string6 = string6 + "<li onclick='checkMovies(this.innerHTML)' class='active'>" + i + "</li>";
                } else {
                    string6 = string6 + "<li onclick='checkMovies(this.innerHTML)'>" + i + "</li>";
                }
            }
        }

        for (i = 1; i <= 7 + emptysInLR; i++) {
            string6 = string6 + "<li style='opacity:0.3;'>" + i + "</li>";
        }

        row6.style.display = "flex";
        // console.log("No Of Empty Boxes : ", 7 + emptysInLR)
    }
    else {

        var string = "";
        for (i = TotalDaysInLastMonth - emptysInFR + 1; i <= TotalDaysInLastMonth; i++) {
            string = string + "<li style='opacity:0.3;'>" + i + "</li>";
        }

        for (i = 1; i <= firstRowEnd; i++) {
            if (array.includes(i)) {
                if (i == dateRef && month == cMonth && year == CYear) {
                    string = string + "<li onclick='checkMovies(this.innerHTML)' class='active'>" + i + "</li>";
                } else {
                    string = string + "<li onclick='checkMovies(this.innerHTML)' style='color:rgb(63, 80, 208);'>" + i + "</li>";
                }

            } else {
                if (i == dateRef && month == cMonth && year == CYear) {
                    string = string + "<li onclick='checkMovies(this.innerHTML)' class='active'>" + i + "</li>";
                } else {
                    string = string + "<li onclick='checkMovies(this.innerHTML)'>" + i + "</li>";
                }
            }
        }

        var string2 = "";
        for (i = (firstRowEnd + 1); i <= firstRowEnd + 7; i++) {
            if (array.includes(i)) {
                if (i == dateRef && month == cMonth && year == CYear) {
                    string2 = string2 + "<li onclick='checkMovies(this.innerHTML)' class='active'>" + i + "</li>";
                } else {
                    string2 = string2 + "<li onclick='checkMovies(this.innerHTML)' style='color:rgb(63, 80, 208);'>" + i + "</li>";
                }

            } else {
                if (i == dateRef && month == cMonth && year == CYear) {
                    string2 = string2 + "<li onclick='checkMovies(this.innerHTML)' class='active'>" + i + "</li>";
                } else {
                    string2 = string2 + "<li onclick='checkMovies(this.innerHTML)'>" + i + "</li>";
                }
            }
        }

        var string3 = "";
        for (i = firstRowEnd + 8; i <= firstRowEnd + 14; i++) {
            if (array.includes(i)) {
                if (i == dateRef && month == monthRef && year == yearRef) {
                    string3 = string3 + "<li onclick='checkMovies(this.innerHTML)' class='active'>" + i + "</li>";

                } else {
                    string3 = string3 + "<li onclick='checkMovies(this.innerHTML)' style='color:rgb(63, 80, 208);'>" + i + "</li>";
                }

            } else {
                if (i == dateRef && month == cMonth && year == CYear) {
                    string3 = string3 + "<li onclick='checkMovies(this.innerHTML)' class='active'>" + i + "</li>";
                } else {
                    string3 = string3 + "<li onclick='checkMovies(this.innerHTML)'>" + i + "</li>";
                }
            }
        }

        var string4 = "";
        for (i = firstRowEnd + 15; i <= firstRowEnd + 21; i++) {
            if (array.includes(i)) {
                if (i == dateRef && month == cMonth && year == CYear) {
                    string4 = string4 + "<li onclick='checkMovies(this.innerHTML)' class='active'>" + i + "</li>";
                } else {
                    string4 = string4 + "<li onclick='checkMovies(this.innerHTML)' style='color:rgb(63, 80, 208);'>" + i + "</li>";
                }

            } else {
                if (i == dateRef && month == cMonth && year == CYear) {
                    string4 = string4 + "<li onclick='checkMovies(this.innerHTML)' class='active'>" + i + "</li>";
                } else {
                    string4 = string4 + "<li onclick='checkMovies(this.innerHTML)'>" + i + "</li>";
                }
            }
        }

        var string5 = "";
        for (i = firstRowEnd + 22; i <= TotalDaysInMonth; i++) {
            if (array.includes(i)) {
                if (i == dateRef && month == cMonth && year == CYear) {
                    string5 = string5 + "<li onclick='checkMovies(this.innerHTML)' class='active'>" + i + "</li>";
                } else {
                    string5 = string5 + "<li onclick='checkMovies(this.innerHTML)' style='color:rgb(63, 80, 208);'>" + i + "</li>";
                }

            } else {
                if (i == dateRef && month == cMonth && year == CYear) {
                    string5 = string5 + "<li onclick='checkMovies(this.innerHTML)' class='active'>" + i + "</li>";
                } else {
                    string5 = string5 + "<li onclick='checkMovies(this.innerHTML)'>" + i + "</li>";
                }
            }
        }

        for (i = 1; i <= emptysInLR; i++) {
            string5 = string5 + "<li style='opacity:0.3;'>" + i + "</li>";
        }
        row6.style.display = "none";
    }


    row1.innerHTML = string;
    row2.innerHTML = string2;
    row3.innerHTML = string3;
    row4.innerHTML = string4;
    row5.innerHTML = string5;
    row6.innerHTML = string6;

    // console.log(currentFullDate)
    // console.log(monthRef)

}

function checkMovies(date) {

    let suffex = "th";
    let refDate = date + "-" + month + "-" + year;

    if (date == 1 || date == 21 || date == 31) {
        suffex = "st";
    }
    else if (date == 2 || date == 22) {
        suffex = "nd";
    }
    else if (date == 3 || date == 23) {
        suffex = "rd";
    }
    else {
        suffex = "th";
    }

    selectedDate.innerHTML = date + suffex + " " + monthsArray[month].slice(0, 3) + " " + year;

    checkMovieSubF(refDate);
}

function checkMovieSubF(refDate) {
    monthViewMoviesUL.style.display = "none";
    listOfMovies.style.display = "block";

    if (movieData[0].includes(refDate)) {
        let refIndexNo = movieData[0].indexOf(refDate);
        let movieTitle = movieData[1][refIndexNo];
        let movieCast = movieData[2][refIndexNo];

        if (movieTitle.includes("+")) {
            movieTitle = movieTitle.split("+");
            movieCast = movieCast.split("+");
            // console.log(movieTitle);
            // console.log(movieCast);

            var string = "";

            for (let i = 0; i < movieTitle.length; i++) {
                string = string + "<li class='listItem'>" + "<h3 class='movieTitle'>" + movieTitle[i] + "</h3>" + "<p class='movieCast'>" + movieCast[i] + "</p>" + "</li>"
            }
            listOfMovies.innerHTML = string;

        } else {
            movieTitle = movieTitle;

            var string = "";

            for (let i = 0; i < 1; i++) {
                string = string + "<li class='listItem'>" + "<h3 class='movieTitle'>" + movieTitle + "</h3>" + "<p class='movieCast'>" + movieCast + "</p>" + "</li>"
            }
            listOfMovies.innerHTML = string;
        }

    }
    else {
        var string = "";

        for (let i = 0; i < 1; i++) {
            string = string + "<li class='noMovies'>" + " - No Movies Found - " + "</li>"
        }
        listOfMovies.innerHTML = string;
    }

    menuView = 0;


}

let menuView = 0;
function displayMoviesInMonth() {
    let MovieMonths = []
    let movieYears = []
    let arrayM = []
    let arrayM2 = []
    let movieDates = movieDataM[0]

    let movieTitlesM = []
    let movieCastM = []
    let movieDateM = []

    if (menuView == 0) {
        selectedDate.innerHTML = "Movies Releasing this Month";
        monthViewMoviesUL.style.display = "block";
        listOfMovies.style.display = "none";
        tip.innerHTML = "Tip : Click on Heading to view movies releasing Today";
        menuView = 1;

        for (let i = 0; i < movieDates.length; i++) {
            MovieMonths[i] = movieDates[i].split("-")[1];
            movieYears[i] = movieDates[i].split("-")[2];
            if (movieYears[i] == year) {
                arrayM[i] = parseInt(movieDates[i].split("-")[1]);
            }
        }

        // console.log(arrayM)

        for (let i = 0; i < arrayM.length; i++) {
            if (arrayM[i] == month) {
                arrayM2.push(i)
                // console.log(i)
            }
        }

        for (let i = 0; i < arrayM2.length; i++) {
            movieDateM[i] = movieDataM[0][arrayM2[i]].split("-")[0];
            movieTitlesM[i] = movieDataM[1][arrayM2[i]]
            movieCastM[i] = movieDataM[2][arrayM2[i]]
        }

        let stringM = "";
        if (movieDateM.length == 0) {

            for (let i = 0; i < 1; i++) {
                stringM = stringM + "<li class='noMoviesM'>" + " - No Movies Found - " + "</li>"
            }

        } else {
            for (let i = 0; i < movieDateM.length; i++) {

                stringM = stringM + "<li>" + "<h2 class='listDate'>" + movieDateM[i] + "</h2>" + "<div class='listInfo'>" + "<h3>" + movieTitlesM[i] + "</h3>" + "<p>" + movieCastM[i] + "</p>" + "</div>" + "</li>"

            }
        }
        monthViewMoviesUL.innerHTML = stringM;
        monthViewMoviesUL.innerHTML = stringM;

        // console.log(movieDateM);
        // console.log(movieTitlesM);
        // console.log(movieCastM);

    } else {
        checkMovieSubF(currentFullDate);
        setCurrentDate();
        menuView = 0;
        tip.innerHTML = "Tip : Click on Date Heading to view movies releasing this month";
    }

    // console.log(menuView)

}

function forwardYMMD(ref) {
    if (view == 2) {
        outline.style.minHeight = "300px";
        body.style.display = "block";
        info.style.display = "block";
        monthsBlock.style.display = "none";
        Month_Year_Heading.innerHTML = ref + " ," + year;
        month = monthsArray.indexOf(ref);
        fillDateBoxes(month, year);
        menuView = 0;
        displayMoviesInMonth();
        view = 1;
    }
    else if (view == 3) {
        outline.style.minHeight = "250px";
        body.style.display = "none";
        info.style.display = "none";
        monthsBlock.style.display = "block";
        Month_Year_Heading.innerHTML = ref;
        year = ref;
        view = 2;
        fillMonthBoxes(year);
    }
    else {
        alert("No Condition Found!")
    }

}

function getIds() {
    for (let index = 1; index < 13; index++) {
        // document.write("let box" + index + " = document.querySelector(\"#box" + index + "\");")

        // document.write("box" + index + ".innerHTML = rangeStart+" + (index - 1) + ";<br>")

        // document.write("box"+index+".innerHTML,")
    }
}

fillDateBoxes(month, CYear);
// checkMovieSubF(currentFullDate);
displayMoviesInMonth();

