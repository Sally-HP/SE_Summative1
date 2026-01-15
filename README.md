# Project Overview

Code and documentation for the Software Engineering Summative 1 Assignment: Meeting cost calculator application. 

## Project Introduction

The purpose of this project is to develop a simple meeting cost calculator, which can be adopted within my workplace to consider whether the cost of a meeting is an effective use of public money. The tool will allow a user to calculate the personnel cost of a meeting, using salary band information across various grades within the department. The project aims to provide a simple user interface which allows quick calculation of this cost.

As a public sector organisation, we must constantly consider our use of public funds and have a duty to ensure these are used in a way that both avoids waste and ensures value for money. This includes the use of employee time as salaries are funded through public money. This project therefore aims to provide teams with ability to better understand the costs of their meetings in order to prompt behavioural changes and get employees to consider the currently invisible cost of time. A tool to quickly and easily calculate this would enable employees to be more proactive in decision making around whether the purpose and intended outcomes of a meeting justify this cost. 

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
`Meeting cost per grade = No. of employees at specific grade * (hourly pay of grade * meeting length)`

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

I applied these colours to the root of my CSS code to ensure they could be easily aligned to the relevant elements in the design and formatting within CSS.

