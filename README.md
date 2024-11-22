# Currency Converter App

A simple yet powerful Currency Converter built with **React**, **Vite**, and **TypeScript**. This app allows users to convert currency amounts between different currencies using real-time exchange rates.

---

## 🧑‍💻 **Features**

- **Real-Time Exchange Rates**: Get the latest exchange rates for various currencies.
- **Currency Conversion**: Convert amounts between any two selected currencies.
- **Conversion History**: View a history of previous currency conversions.
- **Responsive Design**: Optimized for both mobile and desktop.
- **Persistent Storage**: Conversion history saved to local storage for easy access.
- **Error Handling**: User-friendly error messages in case of issues (e.g., network errors).

---

## 📦 **Technologies Used**

- **React**: JavaScript library for building user interfaces.
- **Vite**: Next-generation frontend tool for faster development.
- **TypeScript**: Strongly typed language for improved developer experience.
- **Bootstrap**: For responsive design and components.
- **Custom Hooks**: For managing API calls and state.
- **LocalStorage**: To persist conversion history between sessions.

---

## 🚀 **Installation**

1. Clone this repository:

   ```bash
   git clone https://github.com/Umer-siddique/TA-fullstack-assesment-frontend.git
   ```

2. Navigate into the project directory:

   ```bash
   cd currency-converter-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   Open your browser and navigate to [http://localhost:5173/](http://localhost:5173/) to view the app.

---

## 🛠️ **Usage**

Once the app is running:

1. **Select the Currencies**: Choose the currency you want to convert **From** and **To** using the dropdown menus.
2. **Enter an Amount**: Type the amount you wish to convert in the input field.
3. **Click Convert**: The app will display the conversion result, including the amount converted from one currency to another.
4. **View Conversion History**: Keep track of your past conversions directly below the conversion result.

---

## 💾 **Conversion History**

- Conversion history is saved in the browser's **LocalStorage**, allowing you to view previous conversion results even after refreshing the page or reopening the app.
- The history includes the **from currency**, **to currency**, the **amount**, the **converted result**, and the **date and time** of the conversion.

---

## ⚙️ **API Integration**

This app fetches real-time exchange rates from a free API. The rates are updated automatically whenever the app loads or after every conversion. You can customize the API endpoint if needed.

---

## 🖌️ **Design and Styling**

- **Bootstrap** has been used for responsive design, ensuring the app works well on both desktop and mobile devices.
- Custom styles are applied for unique elements like the conversion result display and the currency selection dropdowns.

---

## 📋 **To-Do and Future Improvements**

- Add support for more currencies.
- Integrate a more advanced chart feature to visualize conversion trends over time.
- Implement multi-currency conversions (e.g., converting multiple currencies at once).
- Improve error handling and add more detailed user feedback.

Happy coding! 🚀
