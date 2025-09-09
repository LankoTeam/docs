"use client";

import Link from "next/link";
import { LogIn } from 'lucide-react';

export function LogInCard() {
  const href = "https://www.lanko.space/signin";

  return (
    <div className="flex flex-col items-center border-x border-b px-4 py-8 text-left">
      <div className="w-full">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between px-6 py-6">
          <div className="space-y-1">
            <h3 className="text-xl font-semibold sm:text-2xl">想要立即体验LANKO?</h3>
            <p className="text-sm text-fd-muted-foreground sm:text-base">
                免费注册新账户，立即开始你的活动之旅!
            </p>
          </div>
          <Link
            href={href}
            className="inline-flex items-center gap-2 bg-fd-muted px-4 py-2.5 text-fd-foreground/90 transition-colors hover:bg-fd-muted/80"
          >
            <LogIn className="size-4" />
            <span className="text-sm font-semibold">注册/登录</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
