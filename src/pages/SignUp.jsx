import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignUp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.status === 409) {
        throw new Error("An account with this email already exists");
      }

      if (response.status === 400) {
        throw new Error("Please check your email and password");
      }

      if (!response.ok) {
        throw new Error("Registration failed. Please try again.");
      }

      navigate("/login", {
        replace: true,
        state: { registered: true },
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
        {location.state?.registered && (
            <p className="text-sm text-green-600">
                Account created successfully! Please sign in.
            </p>
        )}
        <Card className="w-full max-w-md">
            <CardHeader>
            <CardTitle>Create an account</CardTitle>
            <CardDescription>
                Sign up to access the Call Dashboard.
            </CardDescription>
            </CardHeader>

            <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </div>

                <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                    id="password"
                    type="password"
                    autoComplete="new-password"
                    minLength={8}
                    maxLength={72}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </div>

                <div className="space-y-2">
                <Label htmlFor="confirmPassword">
                    Confirm password
                </Label>
                <Input
                    id="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                </div>

                {error && (
                <p role="alert" className="text-sm text-red-500">
                    {error}
                </p>
                )}

                <Button
                type="submit"
                className="w-full"
                disabled={loading}
                >
                {loading ? "Creating account..." : "Sign Up"}
                </Button>

                <p className="text-center text-sm">
                Already have an account?{" "}
                <Link
                    to="/login"
                    className="text-blue-500 hover:underline"
                >
                    Sign In
                </Link>
                </p>
            </form>
            </CardContent>
      </Card>
    </div>
  );
}