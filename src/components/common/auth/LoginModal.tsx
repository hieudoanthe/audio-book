"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import type { LoginModalProps } from "@/types/interfaces/auth";
import LoginHeader from "./LoginHeader";
import LoginForm from "./LoginForm";
import Divider from "./Divider";
import SocialLoginButtons from "./SocialLoginButtons";
import SignUpLink from "./SignUpLink";

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setEmail("");
      setPassword("");
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };

  if (!isOpen) return null;

  // Use portal to render modal directly to body, bypassing stacking context
  const modalContent = (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 pb-20 sm:pb-4 overflow-y-auto"
        onClick={onClose}
        style={{ zIndex: 9999 }}
      >
        {/* Modal */}
        <div
          className="bg-[#1e2128] rounded-lg p-4 sm:p-6 md:p-8 w-full max-w-md space-y-3 sm:space-y-4 md:space-y-6 shadow-2xl border border-[#2a2d36] max-h-[calc(100vh-6rem)] sm:max-h-[90vh] overflow-y-auto my-auto relative"
          onClick={(e) => e.stopPropagation()}
          style={{ zIndex: 10000 }}
        >
          <LoginHeader />
          <LoginForm
            email={email}
            password={password}
            onEmailChange={setEmail}
            onPasswordChange={setPassword}
            onSubmit={handleSubmit}
          />
          <Divider />
          <SocialLoginButtons />
          <SignUpLink />
        </div>
      </div>
    </>
  );

  // Render to body using portal
  if (typeof window !== "undefined") {
    return createPortal(modalContent, document.body);
  }

  return null;
}
