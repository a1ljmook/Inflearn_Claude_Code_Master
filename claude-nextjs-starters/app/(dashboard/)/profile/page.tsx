import { Button } from "@/components/ui/button";
import { ProfileForm } from "@/components/features/profile/profile-form";

// 모킹된 사용자 데이터
async function getUserProfile() {
  // 실제 DB 호출 시뮬레이션
  return {
    name: "홍길동",
    bio: "모던 웹 개발자입니다. Next.js와 React를 사랑합니다.",
    website: "https://github.com/example",
  };
}

export default async function ProfilePage() {
  const user = await getUserProfile();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">내 프로필</h1>
          <p className="text-muted-foreground">계정 정보 및 공개 프로필을 관리하세요.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="p-6 rounded-xl border bg-background space-y-6">
            <h2 className="text-lg font-semibold">기본 정보</h2>
            <ProfileForm initialData={user} />
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border bg-background space-y-4">
            <h3 className="font-semibold">계정 보안</h3>
            <p className="text-sm text-muted-foreground">
              비밀번호를 정기적으로 변경하여 계정을 안전하게 보호하세요.
            </p>
            <Button variant="outline" className="w-full">비밀번호 변경</Button>
          </div>
          <div className="p-6 rounded-xl border bg-background space-y-4">
            <h3 className="font-semibold">알림 설정</h3>
            <p className="text-sm text-muted-foreground">
              중요한 업데이트 소식을 이메일로 받으시겠습니까?
            </p>
            <Button variant="outline" className="w-full">알림 설정 변경</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
