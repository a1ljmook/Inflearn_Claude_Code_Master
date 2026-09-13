import { z } from "zod";

/**
 * 사용자 프로필 업데이트를 위한 유효성 검사 스키마
 */
export const profileSchema = z.object({
  name: z.string()
    .min(2, { message: "이름은 최소 2글자 이상이어야 합니다." })
    .max(50, { message: "이름은 최대 50글자까지 가능합니다." }),
  bio: z.string()
    .max(160, { message: "소개는 최대 160자까지 가능합니다." })
    .optional(),
  website: z.string()
    .url({ message: "올바른 URL 형식이 아닙니다." })
    .optional()
    .or(z.literal("")),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;
