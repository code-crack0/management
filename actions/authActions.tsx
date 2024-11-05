// actions/authActions.js

"use server"
import { signIn as nextAuthSignIn, signOut as nextAuthSignOut } from 'next-auth/react'

export async function signInWithGoogle() {
  return nextAuthSignIn("google", { callbackUrl: "/" })
}

export async function signOutUser() {
  return nextAuthSignOut()
}
