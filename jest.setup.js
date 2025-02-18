import '@testing-library/jest-dom'; 
{
    module.exports = {
        setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
        testEnvironment: "jsdom",
    };      
}