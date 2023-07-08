# Website YourTours provides online booking service for resorts and resorts

## Technology

-   React / Typescript
-   Axios / MUI v5
-   React Router V6 / React-hook-form
-   Scss / Notistack
-   React-date-range / React-chartjs-2
-   React scrollspy / React-infinite-scroll-component
-   aos / i18next
-   redux toolkit / redux thunk
-   stomp/stompjs / sockjs-client
-   react-slick / react-transition-group
-   react-paypal-js / moment

***Here is the source Front end of the project. You can refer backend api (spring boot) from following source: https://github.com/MinhThang03/YourTours !***

## Features

<details>
<summary><b>Auth</b></summary><br />

-   **Sign in:** Users use this function to log in to the system.

-   **Sign up:** Website visitors use this function to register for a member account (has validate password format and authentication OTP code).

-   **Edit account information:** Users use the personal information editing function to change personal information.

-   **Forgot password:** User uses forgot password function to reset password (have a verification code to reset password).

-   **Active account:** Activate the account to be able to book rooms and use special functions (with OTP code to activate the account).
</details>

<details>
<summary><b>Client</b></summary><br />

-   **View the list of provinces:** Website visitors use this function to see cities sorted by number of bookings.

-   **Look up house listings:** Website visitors use this function to look up listings of homes with in-demand properties.

-   **Register home:** Users use this function to register a new house for rent. Become a host.

-   **View detailed information about the house:** Website visitors use this function to view detailed information of the house.

-   **View booking history:** Users use this function to view information about the account's booking history.

-   **Book room:** Users use this function to book houses.

-   **Edit booking status:** Users use this function to edit booking information.

-   **Cancel reservation:** User use this function to cancel the booked house.

-   **View a list of booking information:** The user uses this function to view the booking information of the registered houses of that account.

-   **Rate:** Users rate the experience after checking out the rented room.

-   **Edit favorites list:** Users use this function to edit home listings in favorites.

-   **View favorites:** Users use this function to view the list of homes in the favorite set.

</details>

<details>
<summary><b>Host</b></summary><br />

-   **Edit home information:** Homeowners use this function to edit the information of a house they register.

-   **View the list of houses currently for rent:** The user uses this function to view the list of houses currently registered in that account.

-   **Statistics of the owner:** Users use this function to view statistical information about their rental situation.

-   **Custom house prices on special days:** Users use this function to edit rental house price information by day.

-   **Utilities configuration for the house:** Homeowners use this function to configure the utility for a registered house.

-   **Configure the surcharge for the house:** Owner can configure the price of each type of surcharge for the house.

-   **Configure the discount program:** Owner can configure % discount by day for his rental house.

</details>

<details>
<summary><b>Admin</b></summary><br />

-   **Admin page statistics:** Admin use this function to view admin rights statistics.

-   **View the list of accounts:** Admin use this function to view the list of accounts in the system.

-   **View the list of registrars:** Admin use this function to see the list of registered houses for rent.

-   **Room Type Management (CRUD):** Admin use this function to manage (CRUD) room type.

-   **Bed Type Management (CRUD):** Admin use this function to manage (CRUD) bed type.

-   **Facilities Management (CURD):** Admin use this function to manage (CRUD) type of utility.

-   **Manage Discount Type (CRUD):** Admin use this function to manage (CRUD) discount type.

-   **Surcharge Management (CURD):** Admin use this function to manage (CRUD) type of surcharge.
</details>

<details>
<summary><b>Notification real time</b></summary><br />

-   User:

    -   BOOKING_NOTIFICATION: Notify check in check out for user -> click return to booking history page.
    -   HOME_NOTIFICATION: Promotion notice -> click go to home detail page.

-   Owner:
  
    - OWNER_HOME_NOTIFICATION: Notify someone booking or canceling a room -> click return to Today page in rental management
</details>

## Setup

-   Prepare the environment variables as follows
    |Variable name |Obligatory |Description |Default |
    |----------------------|---------|------------------------------------------------------------------------------------------|----------------|
    |PORT |❌ |Port to listen to (listen) server api |3001 |
    |REACT_APP_API_BASE_URL |✔ |Connection string to connect to Backend API | |
    |REACT_APP_API_BASE_URL_SOCKET |✔ |Connection string to connect to Backend API Socket Real time | |
    |REACT_APP_PAYPAL_CLIENT_ID |✔ |Connection string to connect to Paypal development | |

## Preview

### Home page
![1](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/0d922b7e-b1e6-4d29-acdd-0a7cec802fd5)

<details>
<summary><b>Plus</b></summary><br />

- View table notification

![3](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/69f224e8-c1ce-4cab-82ce-32b7c7831e29)

- View select language

![4](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/d4be3def-2c5a-48a4-be1d-37befdf5cae4)

- View infomation room from search by province or name room

![5](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/9d0e0563-5fa5-4bde-8d93-70c01855fe93)

</details>

### Detail room page
![2](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/aa949939-f092-423e-8fe6-98f90160423a)

<details>
<summary><b>Plus</b></summary><br />

- View more house utilities

![3](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/2754b01a-472c-4afc-b9cf-a58c8a5f3f1f)

- Details of base price by day

![4](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/224a2b57-a010-4bcd-b237-9fd7796b34cc)

- Selected count client rent home

![5](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/1d2516e3-d345-40c9-b916-63f714374d04)

- Full booking information with promotion

![6](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/2f1639a9-cdcd-46f8-85ef-8304eeb82739)

</details>

### Booking page
![7](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/1d93d59e-aaf1-483b-8735-00e4e106b090)

### Page becomes the host

- Introduce

![10](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/e41819c5-0d5a-4fc4-9119-fd923f7c3dfc)

- Step setup one

![11](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/4037ac29-9643-4969-9b20-b11abe17a0df)

- Step setup two
  
![12](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/324a71e3-b75e-416b-96a0-70c21337c7f6)

- Step setup three
  
![13](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/68dbf68e-2b92-458c-a11b-ab00a89d18c6)

- Step setup four

![14](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/982f0341-2487-422b-9bb5-3af600f0cf1b)

- Step setup five

![15](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/3294778c-7b0a-44ce-b2d9-d33d6fb4aafb)

- Confirm setup
  
![17](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/93e06708-8cad-470b-bf4c-fe64dbf5c9dd)

- Welcome owner new

![18](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/b1584275-6287-43ac-8621-256ddaee46e7)

<details>
<summary><b>Plus</b></summary><br />

- When close setup

![16](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/c14e09fa-d818-418f-8c57-72fa40b30c64)

</details>


