"use server";

import { revalidatePath } from "next/cache";
import { profileSchema, type ProfileFormValues } from "@/schemas/profile";
import { ApiResponse } from "@/types";

/**
 * 사용자 프로필 업데이트 서버 액션
 * 실제 DB 연동 전까지는 모킹된 로직으로 동작합니다.
 */
export async function updateProfile(data: ProfileFormValues): Promise<ApiResponse<{ success: boolean }>> {
  try {
    // 1. 데이터 유효성 검사
    const validatedData = profileSchema.parse(data);

    // 2. DB 업데이트 시뮬레이션 (실제 구현 시 prisma.user.update 등 사용)
    console.log("Updating profile in database...", validatedData);

    // 네트워크 지연 시뮬레이션
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // 3. 경로 재검증 (캐시 갱신)
    revalidatePath("/dashboard/profile");

    return {
      success: true,
      data: { success: true },
      error: null,
    };
  } catch (error: any) {
    if (error.name === "ZodError") {
      return {
        success: false,
        data: null,
        error: {
          message: error.errors[0].message,
          code: "VALIDATION_ERROR",
        },
      };
    }

    return {
      success: false,
      data: null,
      error: {
        message: "프로필 업데이트 중 예상치 못한 오류가 발생했습니다.",
        code: "INTERNAL_SERVER_ERROR",
      },
    };
  }
}
