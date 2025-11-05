import { AuthIcons } from "@/constants/authIcons";

export default function SocialLoginButtons() {
  return (
    <div className="space-y-2 sm:space-y-3">
      <button
        type="button"
        className="w-full flex items-center justify-center gap-2 sm:gap-3 py-2 sm:py-3 rounded-lg bg-[#282b32] hover:bg-[#373945] text-white text-xs sm:text-sm transition-colors border border-[#373945]"
      >
        {AuthIcons.Google}
        <span>Đăng nhập bằng Google</span>
      </button>

      <button
        type="button"
        className="w-full flex items-center justify-center gap-2 sm:gap-3 py-2 sm:py-3 rounded-lg bg-[#282b32] hover:bg-[#373945] text-white text-xs sm:text-sm transition-colors border border-[#373945]"
      >
        {AuthIcons.Facebook}
        <span>Đăng nhập bằng Facebook</span>
      </button>
    </div>
  );
}
