"use client"

// import axios from "axios"
import { useRouter } from "next/router"
import { create } from "zustand"

import axios from "../../config/AxiosConfig"

const apiURL = process.env.NEXT_PUBLIC_API_URL

export const useUserStore = create((set) => ({
  userTheme: "light",
  data: [],
  isUserLoading: false,
  userError: null,
  isLoggedIn: false, // New state variable to track login status

  setUserTheme: (userTheme: string) => set({ userTheme }),

  checkLoggedIn: () => {
    // Check if a token is present in local storage
    const token = localStorage.getItem("accessTokenDevER")
    set({ isLoggedIn: !!token }) // Update isLoggedIn based on token existence
  },

  logIn: async (
    credentials: { email: string; password: string },
    router: any
  ) => {
    try {
      set({ isUserLoading: true })

      // Make the API call to authenticate the user
      const response = await axios.post(`${apiURL}/users/login`, credentials)

      // Assuming the API returns a token on successful login
      if (response.data && response.data.token) {
        // Save the token in local storage or use a state management library like Zustand to store the token.
        localStorage.setItem("accessTokenDevER", response.data.token)

        // Navigate to the desired page after successful login
        router.push("/home")
      }

      set({ isUserLoading: false })
    } catch (error) {
      console.log("error", error)
      set({ userError: error })
    }
  },
  logProviderIn: async (credentials: { email: string }, router: any) => {
    try {
      set({ isUserLoading: true })

      // Make the API call to authenticate the user
      const response = await axios.post(
        `${apiURL}/users/loginprov`,
        credentials
      )

      // Assuming the API returns a token on successful login
      if (response.data && response.data.token) {
        // Save the token in local storage or use a state management library like Zustand to store the token.
        localStorage.setItem("accessTokenDevER", response.data.token)

        // Navigate to the desired page after successful login
        router.push("/home")
      }

      set({ isUserLoading: false })
    } catch (error) {
      console.log("error", error)
      set({ userError: error })
    }
  },

  createUser: async (user: any, router: any) => {
    const data = []
    console.log("user", user)

    // Get the router instance

    try {
      set({ isUserLoading: true })
      const response = await axios.post(`${apiURL}/users`, user)
      console.log("response", response)
      if (response.data) {
        data.push(response.data)
        set((state: { data: any }) => ({
          isUserLoading: false,
          data: [...state.data, response],
        }))

        // Use router.push to navigate to the desired page
        router.push("/sendVerification")
      }
    } catch (error) {
      console.log("error", error)
      set({ userError: error })
    }
  },
  createProviderUser: async (user: any, router: any) => {
    const data = []
    console.log("user", user)

    // Get the router instance

    try {
      set({ isUserLoading: true })
      const response = await axios.post(`${apiURL}/users/provreg`, user)
      console.log("response--------------", response)
      if (response.data) {
        data.push(response.data)
        set((state: { data: any }) => ({
          isUserLoading: false,
          data: [...state.data, response],
        }))

        // Use router.push to navigate to the desired page
        router.push("/sendVerification")
      }
    } catch (error) {
      console.log("error---------", error)
      set({ userError: error })
    }
  },
  logout: () => {
    // Clear the token from local storage and set isLoggedIn to false
    localStorage.removeItem("accessTokenDevER")
    set({ isLoggedIn: false })

    // Redirect the user to the login page after logout
  },
}))
