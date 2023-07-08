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

-   Owner: + OWNER_HOME_NOTIFICATION: Notify someone booking or canceling a room -> click return to Today page in rental management
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
