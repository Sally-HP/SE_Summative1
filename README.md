# Project Overview

Code and documentation for the Software Engineering Summative 1 Assignment: Meeting cost calculator application. 

**Production Env App:** https://sally-hp.github.io/SE_Summative1/

## Project Introduction

The purpose of this project is to develop a simple meeting cost calculator, which can be adopted within my workplace to consider whether the cost of a meeting is an effective use of public money. The tool will allow a user to calculate the personnel cost of a meeting, using salary band information across various grades within the department. The project aims to provide a simple user interface which allows quick calculation of this cost.

As a public sector organisation, we must constantly consider our use of public funds and have a duty to ensure these are used in a way that both avoids waste and ensures value for money. This includes the use of employee time as salaries are funded through public money. This project therefore aims to provide teams with ability to better understand the costs of their meetings in order to prompt behavioural changes and get employees to consider the currently invisible cost of time. A tool to quickly and easily calculate this would enable employees to be more proactive in decision making around whether the purpose and intended outcomes of a meeting justify this cost. 

# User guidance

Getting started:
- Open the app in browser https://sally-hp.github.io/SE_Summative1/

Product features:
- **Cost calculation:** Allows users to calculate the meeting cost based on their own inputted data
- **Salary information:** Calculates attendee cost using embedded baseline 2025/26 pay data
- **Grade selection:** Users can easily select a range of attendee grades, to determine the true cost of attendee time. 
- **Attendee set-up:** Users can add additional attendee rows to suit their needs through the use of the 'plus' button.

How to use: 
- Insert your expected meeting duration in the 'Enter meeting duration' box. This can be inserted through text, or use the arrows on the box's right hand side. Values should be entered as a decimal of hours. For example, if your meeting is due to last for 2 and a half hours, enter the value 2.5.
- Insert expected number of attendees in the 'Number of attendees' field and choose the grade of these from the 'Select grade' drop down list. 
- To insert an additional field for a new grade, click the plus icon on the right hand side of Attendees.  
- Once you're happy that you have included all information required for your meeting, click the calculate cost button for the results. 

## App Demo

![AppDemo](https://github.com/Sally-HP/SE_Summative1/blob/main/images/user-guide-video.gif)

# Technical documentation

Project Management
- [GitHub Projects](https://github.com/users/Sally-HP/projects/2/views/1)

Prototype design
- Figma

Production envrionment app
- [Meeting Cost App MVP](https://sally-hp.github.io/SE_Summative1/)

Tech Stack
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript#:~:text=JavaScript%20(JS)%20is%20a%20lightweight,Apache%20CouchDB%20and%20Adobe%20Acrobat.)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

Files required to run the application
- index.html
- script.js
- style.css

Testing
In your terminal run the following to check installed version status: 
- node -v
- npm -v

If packages not installed, follow instructions to [install Node.js and npm through npm docs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

To run tests on your local machine after following the above steps:
1. Clone the repository using **git clone https://github.com/Sally-HP/SE_Summative1.git**
2. Run the following command in terminal **npm run test**

## Project Scope

### In Scope

- Simple user interface which allows entering of basic meeting information
- Use of standardised basic salary band data 
- Automated calculation of anticipated meeting cost
- Results displaying total cost 
- A lightweight web-based application suitable for small scale internal use
- Clear project documentation 

### Out of scope
- Storing of information
- Capturing of specialist pay bands outside the departmental norm
- Mobile app development

## Project requirements

### Functional Requirements

### 1. User interface
- **Input fields**: Users must be able to input number of employees for each of the grades from G6-EA and the meeting duration. 
- **Calculate button**: Button required to trigger the calculation based on user input data. 
- **Results**: The output must display the total anticipated meeting cost, based on the information provided. 

### 2. Data sources
- **Salary data**: Embed standardised grade salary rates for 2025/26. These should use band minimums rather than averages due to limited pay progression through the range.

### Calculation Logic 
- **Calculation formula**: Implement formula to calculate the meeting cost based on information provided:
    `Meeting cost per grade = Meeting duration (hours) * attendees * hourly salary for specific grade

### Non-Functional Requirements

### 1. Accessibility 
- Must adhere to Web Content Accessibility Guidelines (WCAG) 2.2.
- Must adhere to Government Digital Design Standards for colour and text accessibility. 

### 2. Performance
- Results load within 1 second.

## User Stories
User stories help to ensure that end users are at the centre of software development, by focusing on what their needs are from the end product. I developed user stories based on the key users of the product and what their requirements in this space are from speaking to colleagues. 

### User story 1: Capturing number of attendees

As a project manager 
I want to enter the number of attendees
So that I can estimate the total meeting cost

### User story 2: Capturing grade pay

As a project manager
I want to input job grades per attendee
So that I can estimate the cost based on standard pay bands

### User story 3: Defining meeting duration

As a project manager
I want to enter the meeting duration in hours
So that I can calculate the cost of different meeting lengths

### User story 4: Capturing blank information

As a project manager
I want the ability to leave some grades blank
So that I can avoid adding 0 values where not required

### User story 5: Meeting cost output

As a project manager
I want to see the total cost clearly displayed as an output
So that I can make informed decisions on whether a meeting is needed and feed this back to my stakeholders

# Prototype Design

## Wireframing

Once I had captured the project requirements and user stories, the next step was to initiate the first stage of user interface design through wireframing in Figma. I designed two prototype mockups for a desktop application, as mobile application design was out of the project scope. The purpose of wireframing multiple designs in Figma was to map out different design ideas to gather feedback from project stakeholders before code development. 

The main differences between these designs were focused on how attendees of different grades would be captured. The first design would have one input box per grade as a static design, for users to fill in the number of each of these attending. The second design allowed users to add additional grades in as needed through the use of a button, and choose the grade specifically from a drop down list. When I tested these designs with stakeholders, the majority felt that the Design Option B was their preferred choice in terms of visuals and anticipated ease of use. This was in part due to it being easier to refer back to the specific data input in Option B once the calculation had been done, so a user could show the size of meeting the value related to. Based on this, I decided to proceed with designing the app in the style of Design Option B. 

### Wireframe 1 - Design Option A: Input phase

![WF1](https://github.com/Sally-HP/SE_Summative1/blob/main/images/Wireframe%20-%201.png)

### Wireframe 2 - Design Option A: Output phase

![WF2](https://github.com/Sally-HP/SE_Summative1/blob/main/images/Wireframe%20-%202.png)

### Wireframe 3 - Design Option B: Input Phase

![WF3](https://github.com/Sally-HP/SE_Summative1/blob/main/images/Wireframe%20-%203.png)

### Wireframe 4 - Design Option B: Output Phase

![WF4](https://github.com/Sally-HP/SE_Summative1/blob/main/images/Wireframe%20-%204.png)

## Design standards 

As referenced in the non-functional requirements, there are specific accessbility standards which must be incoroporated into the design of this application. This includes colour requirements such as using high contrast colours between text and backgrounds and avoiding use of poor colour combinations. 

The GOV.UK design system has [pre-specified colour pallette](https://design-system.service.gov.uk/styles/colour/#colour-palette) to be used for web design, so I ensured I aligned my chosen colour scheme from my designs in Figma to the specific relevant shades taken from this pallette, as outlined in red below. 

![colourpalette](https://github.com/Sally-HP/SE_Summative1/blob/main/images/gov_colour_pallette.png)

Further along in my project, I applied these colours to the root of my CSS code to ensure they could be easily aligned to the relevant elements in the design and formatting within CSS.

# Project Management

## Kanban workflow

I managed my project within GitHub using GitHub Projects to visually manage my workflow. This allowed me to track my tickets (issues) raised in order to progress the work that needed to be completed in a logical way, reducing the amount of issues worked on at one time. This meant I was able to add features and rectify bugs in a more efficient manner and streamline the delivery of my prototype. 

I decided to approach and organise my project using Kanban, as opposed to a Scrum approach utilising sprints, in order to embed a continuous flow of developments in my project. This felt a suitable approach due to the small size and independent nature of the project. In practice, this meant only working on 1-2 issues at one time, and having a larger backlog to be picked up once current work had been completed and deployed. This helped me to keep on top of what needed to be done, reduce multi-tasking and benefit from the efficiences of fully focusing on one issue from start to end, before picking up the next. This way of working was beneficial for my working style.

I organised my tasks in my kanban board within four sections: 
- Backlog: Tickets which need to be completed within the project, but are not yet started. Tickets are added to backlog as default. 
- Ready: Tickets to be ticked up next from backlog.
- In progress: Tickets which are being actively worked on. 
- Done: Tickets which have been completed and deployed were relevant. 

![kanban](https://github.com/Sally-HP/SE_Summative1/blob/main/images/kanban_githubproject.png)

## Ticket templates

One of the first tickets I worked on as part of the project was to complete ticket templates, to ensure consistency when opening tickets within the project. I created three templates based on the tickets I thought would be most common during development. These were **feature**, **design/documentation** and **bug**. 

By developing this consistent styling, I was able to clearly review the types of tickets in the backlog when reviewing my kanban board. 

## Pull requests and branching

Likewise, when deploying commits into my repository and creating pull requests I aligned these with the ticket templates for ease of reviewing these and to keep my project organised for future use. I used seperate branching for each ticket as is common practice. Pull requests occasionally would cover multiple tickets, however it would generally be a single ticket per branch and pull request. 

# Building the MVP

## HTML development

I first developed a basic app in html to capture the general structure of my product, and map the fields out from design into code. Once this had been completed, I had a basic skeleton structure of the fields needed, without any functionality  or style/design development.

![basicapp](https://github.com/Sally-HP/SE_Summative1/blob/main/images/basic-app.png)

## Javascript development

Once the basic HTML structure had been developed, I focused on building the functionality within Javascript. The steps required here were adding additional attendee rows, specifying salary data and calculating the total through the calculation button. I called the addattendee function at the end of this script to ensure the inital app load would include one row of fields for the attendee and grade selection. Once the JS had been developed, I added the script into the HTML to link these files and make this functional. 

### Adding in additional attendees 
As gathered through feedback from users, I understood that I needed to add a function into the app which allowed users to add additional attendee rows with the option to choose the grade from a drop down list. I developed code in javascript to cause this to happen when using a specific button in the application, and ensured these fields were contained within the second row of my app fields for design purposes later on in the development. 

### Salary data
As there was no api avaliable capturing standard salary information I was required to hardcode this into the apps backend, ensuring the grades were aligned to those specified within the drop down field for adding attendees. As salaries only change on an annual basis, this had little impact on the maintainability of my application, however this is to be reviewed for future years if the app's uptake is significant. 

### Calculating total cost
In order to calculate the total meeting cost based on the information provided, the calculation needed embedding within the code also. This required capturing the duration, attendee and grades information inputted by the user and calculating the total meeting cost. 

The steps required were:
- Capture duration from duration field as a float value, as meetings can input in 0.5 increments
- Capture all attendees from attendee field
- Capture all grades from grade selection field
- Loop through each second row containing one attendee number field and one grade field per row
- Read the number of attendees for each grade
- Look up salary for each grade and convert this to hourly pay
    *salary/(number of weeks x contracted hours per week)*
- Calculate total
    *meeting duration x (attendees x hourly pay)*
- Display result as £ to 2 decimal places. 

## CSS development

Once I was happy with the basic fields and had checked the button and drop down functions were working as anticipated, I moved onto the design and formatting of the app in CSS. I utilised classes and id's throughout the HTML and Javascript code to allow for easier formatting in CSS once this stage was reached. 

# Unit Testing

As the calculation function is a core component of the tool, the logic underpinning this was important to test as part of Test Driven Development, to ensure this function was working consistently as developments were made. 

This logic takes meeting duration, count of attendees at each grade and salary data per grade and converts these into a total estimated cost for meetings. 

As this logic is embedded within the JavaScript as part of the user interface, I created a new file cost-calc-logic.js in order to test this element independently. The reasoning behind this is to test the mathematical calculation element of the function is correct, independent of other actions. 

Testing this function determines whether the correct salary information is being used within the calculation, which was the biggest risk as this relied on the code matching the grade code with the correct salary. 

![TestPass](https://github.com/Sally-HP/SE_Summative1/blob/main/images/addattendee-test-pass.png)

Following this test, I expanded the test to involve multiple rows of attendee information to ensure the calculation logic still worked as expected when working with a more complex input. 

![2TestPass](https://github.com/Sally-HP/SE_Summative1/blob/main/images/addmultipleattendee-test-pass.png)

Full testing information can be accessed within the script.test.js file. 

# Evaluation

When reflecting on my MVP application against the project scope and requirements outlined in the initial planning stage, I believe this project to be largely a success. I have met most requirements in full, with the expection of further work to be done on accessibility requirements during next steps.

By prototyping two designs I was able to take onboard user feedback and develop the MVP in line with user needs, which is an import step in software design.

Throughout the app development I was able to test the user interface and capture bugs to be rectified within the project issues. Throughout the project I used GitHub not only for version control, but also for issue tracking, project management and push/pull requests. This was my first time working with GitHub in this way and I felt it made this project more successful and easier to manage, than using seperate tools as is my usual experience. 

Overall this application does provide a working model to assist users in calculating meeting costs within their organisations, with a strong user interface and alignment to government design standards. However this now requires an uptake from users in order to understand any potential bugs which have not yet been addressed. User feedback is a key feature in app development to ensure this is meeting needs and a product which will be widely adopted. 

If I were to develop this project further in future, I would focus on two areas:
- more significant test driven development and error handling to ensure the codebase is robust and the app communicates errors with users as these are weaker areas in the current app development.
- creating a download button for users to download their results for future reference. 