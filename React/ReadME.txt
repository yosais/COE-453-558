> For each React application, follow these steps to generate the final web application. 
> The code of the final application will be in a folder named 'dist'. These are the files
> that you upload to your server.

1. Install Node
2. Install TypeScript  > npm install -g TypeScript (Skip if TypeScript is already installed)
3. Go the application folder (e.g., React/01)
4. Initialize the application folder > npm init -y (This generates the project configuration file package.json)
5. Install the Parcel bundler > npm install parcel-bundler (This tool will generate your final web application)
6. Install React libraries > npm install react react-dom react-router-dom@5.0.1
7. Install Types to be used by TypeScript > npm install -D @types/react @types/react-dom @types/react-router-dom
8. Update Package.json with a new task that will compile your web application and start the development server
to test your final web application: 

"scripts": {
    "dev": "parcel index.html"
  },

  9. Run your web application > npm run dev 

  10. You can access your web application at http://localhost:1234


Congratulations! 

Your web application is ready and can be found in the 'dist' folder

>>>> Note <<<<<
For some examples, you may need to change the application file inside the index.html file.
    <script src="./app3.tsx"></script>