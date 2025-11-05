"use client";
import type { LoginFormProps } from "@/types/interfaces/auth";

export default function LoginForm({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
}: LoginFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-3 sm:space-y-4">
      {/* Email/Phone field */}
      <div>
        <label
          htmlFor="email"
          className="block text-white text-xs sm:text-sm font-medium mb-1 sm:mb-2"
        >
          Email hoặc số điện thoại
        </label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-[#282b32] border border-[#373945] text-white text-sm sm:text-base placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
          placeholder="Nhập email hoặc số điện thoại"
          required
        />
      </div>

      {/* Password field */}
      <div>
        <label
          htmlFor="password"
          className="block text-white text-xs sm:text-sm font-medium mb-1 sm:mb-2"
        >
          Mật khẩu
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => onPasswordChange(e.target.value)}
          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-[#282b32] border border-[#373945] text-white text-sm sm:text-base placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
          placeholder="Nhập mật khẩu"
          required
        />
      </div>

      {/* Forgot password */}
      <div className="flex justify-end">
        <button
          type="button"
          className="text-orange-500 text-xs sm:text-sm hover:text-orange-400 transition-colors"
        >
          Quên mật khẩu?
        </button>
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="w-full py-2 sm:py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-sm sm:text-base font-semibold transition-colors"
      >
        Đăng nhập
      </button>
    </form>
  );
}
