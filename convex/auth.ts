import Google from "@auth/core/providers/google";
import Github from "@auth/core/providers/google";
import { Password } from "@convex-dev/auth/providers/Password";
import { convexAuth } from "@convex-dev/auth/server";

const CustomPassword = Password({
  profile(params) {
    return {
      email: params.email as string,
      name: params.name as string,
    };
  },
});

export const {} = convexAuth({
  providers: [Github, Google, CustomPassword],
});
