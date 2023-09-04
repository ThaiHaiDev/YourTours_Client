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

<details>
<summary><b>Table of contents</b></summary><br />
    
- Home page (with UI plus)

- Detail room page (with UI plus)

- Booking page

- Page becomes the host (with UI plus)

- List room page (with UI plus)

- Favorites page

- History for customer page (with UI plus)

- Overview host page (with UI plus)

- List room of host page

- Config for room of host (*Main config) (with UI plus)

- Calender set config price special page

- History transaction of host page

- Sign in page

- Forgot password page

- Dashboard admin

- Management CMS (because they are similar, show a few pages)
</details>

### Home page
![FireShot Capture 123 - Yourtours UTE - your-tours-client vercel app](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/aaab055c-644d-4a4c-947b-bf47c1ef344f)

<details>
<summary><b>Plus</b></summary><br />

- View table notification

![FireShot Capture 117 - Yourtours UTE - your-tours-client vercel app](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/6d580562-51d3-4d9e-b048-c6e78307020b)

- View select language

![FireShot Capture 118 - Yourtours UTE - your-tours-client vercel app](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/d994d39c-f91d-408a-80d7-fc18669fec83)

- View infomation room from search by province or name room

![FireShot Capture 119 - Yourtours UTE - your-tours-client vercel app](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/48bbb484-ccb4-4534-b15c-29c5cee55d73)

</details>

### Detail room page

![2](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/7beb2d26-d6d7-4699-b841-82b8b722235e)

<details>
<summary><b>Plus</b></summary><br />

- View more house utilities

![3](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/285c4feb-39b2-4dfd-ae6d-1acea71ffeaf)

- Details of base price by day

![4](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/33a3d800-5ffe-4d04-973c-bb5c146df69c)

- Selected count client rent home

![5](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/88cecca2-e205-479c-ac74-0e2038b74b60)

- Full booking information with promotion

![6](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/0e6525fd-551e-4df9-8339-63144af995f9)

</details>

### Booking page
![7](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/90a88464-438f-466f-849a-2085601d41bb)

### Page becomes the host

- Introduce

![10](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/b2284dcd-d613-4f9a-8472-afc2be213a45)

- Step setup one

![11](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/dc30035e-5ee5-4752-9de5-2ac5388252c8)

- Step setup two
  
![12](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/ad674cb4-b401-461b-b94e-95d0a587155a)

- Step setup three
  
![13](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/21b424d8-995d-48d4-a16f-9e0f0b77af01)

- Step setup four

![14](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/aa601144-b55f-4df5-8d8c-c0a22584f2fb)

- Step setup five

![15](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/8a4bae2d-22fd-4596-9fb5-dc1794a50af1)

- Confirm setup
  
![17](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/945f6a12-21d7-4313-ab87-bb96295ad4aa)

- Welcome owner new

![18](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/eac0d113-f771-410b-ba7b-f232129e871c)

<details>
<summary><b>Plus</b></summary><br />

- When close setup

![16](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/de4682dd-d6e8-40a0-b440-b08eb6153d38)

</details>

### List room page

![8](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/876211a1-70e7-46e7-a806-d728b15eb685)

<details>
<summary><b>Plus</b></summary><br />

- Filter

![9](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/428a11a7-e166-4723-a8df-898f19972d72)

</details>

### Favorites page

![19](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/c5c5a012-85c1-4ec3-a0f7-6280d6a3e955)

### History for customer page

![20](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/d28d9ecc-4136-4712-833b-f77ce9d14705)

<details>
<summary><b>Plus</b></summary><br />

- Rate

![21](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/348f9554-833d-4ef2-8a3a-434311212776)

</details>

### Overview host page

![22](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/9d940f3e-b401-4537-a6ce-87a47b18fae0)

![23](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/694cc744-39ef-4b0b-8777-9a7b98e6b8fe)

![24](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/2be0b8d0-9dff-4237-8e52-144b349c2f21)

### List room of host page

![25](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/6452d84a-d196-4e7d-8436-ac71d74493f6)

### Config for room of host (*Main config)

![26](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/e55fc3d3-a680-42a6-9778-1c8a3f6329d8)

<details>
<summary><b>Plus</b></summary><br />

- Config type room page

![27](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/b15d6baa-f21e-417e-88d2-1c09f7cb22e1)

![28](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/3a1de851-3f07-4fff-b33d-12088424be21)

- Config type bed page

![29](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/5e77fb45-f518-463a-b09d-155594a24641)

- Config convenient for room page

![30](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/027cbdd0-7194-419d-ab0e-cca358c8755c)

</details>

### Calender set config price special page

![31](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/f53cfb03-abee-4c6e-84ac-c3eed87b91eb)

### History transaction of host page

![32](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/2686cc41-4f5f-418d-b64f-2b7b9b568080)

### Sign in page

![33](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/7067de40-65c4-4577-bbdc-1391f6b3a405)

### Forgot password

![35](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/37e7d333-5603-4886-8cf0-f116f8bb9e6e)

![36](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/48df21bf-9cbe-48fe-931e-3260174b05ec)

### Dashboard admin

![37](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/fbe605a9-3807-4a23-ad4d-bc4204dfb81d)

### Management CMS (because they are similar, show a few pages)

![38](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/6c91288a-5cdf-4360-a57e-03c9ca7ada87)

![39](https://github.com/ThaiHaiDev/YourTours_Client/assets/85157423/c276d1a5-7876-4eb1-a984-2d003ac667c1)



