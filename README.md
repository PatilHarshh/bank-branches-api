# Bank Branches API

This project implements a REST API to get the Bank List and its branch details for a specific branch. Two approaches have been taken to solve this problem:

1. Using a CSV file to load data and serve it through REST API endpoints.
2. Using MongoDB to store data and serve it through REST API endpoints.

## Prerequisites

- Node.js
- npm or yarn
- MongoDB (for approach 2)

## Approach 1: Using CSV File

In this approach, the data is stored in a CSV file named bank_branches.csv. The CSV file contains columns such as ifsc, bank_id, branch, address, city, district, state, and bank_name. The Node.js application reads this file, parses the data, and loads it into memory. The application then sets up REST API endpoints to serve the bank and branch information.

### Overview

