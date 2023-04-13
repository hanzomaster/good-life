import { z } from "zod";
import { protectedProcedure, publicProcedure, router } from "../trpc";

export const postRouter = router({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),
  byId: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.user.findFirst({ where: { id: input } });
  }),
  create: protectedProcedure
    .input(z.object({ title: z.string(), content: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.user.create({
        data: {
          name: input.title,
          email: input.content,
        },
      });
    }),
});
