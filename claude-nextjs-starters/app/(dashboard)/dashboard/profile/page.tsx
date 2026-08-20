import { ProfileForm } from "@/components/features/profile/profile-form";

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">프로필 설정</h1>
      <div className="rounded-xl border bg-card p-6 shadow-sm">
        <p className="text-muted-foreground mb-6">
          당신의 프로필 정보를 관리하고 업데이트하세요.
        </p>
        <ProfileForm initialData={{}} />
      </div>
    </div>
  );
}
