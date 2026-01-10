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
- *Input fields for employee grades and meeting time*: Users must be able to input number of employees for each of the grades from G6-EA and the length of time the meeting will be. 
- *Calculate button*: Button required to trigger the calculation based on user input data. 
- *Results*: The output must display the total anticipated meeting cost, based on the information provided. 

### 2. Data sources
- *Salary data*: Embed standardised grade salary rates for 2025/26. These should use band minimums rather than averages due to limited pay progression through the range.

### Calculation Logic 
- *Calculation formula*: Implement formula to calculate the meeting cost based on information provided.
    `Meeting cost per grade = No. of employees at specific grade * (hourly pay of grade * meeting length)`

### Non-Functional Requirements

### 1. Accessibility 
- Must adhere to Web Content Accessibility Guidelines (WCAG) 2.2.
- Must adhere to Government Digital Design Standards for colour and text accessibility. 

### 2. Performance
- Results load within 1 second.