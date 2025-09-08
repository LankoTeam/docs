"use client";

import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import { 
  RocketIcon,
  BellDot,
  BadgeDollarSign,
  Brain,
  PencilLine,
  MousePointerClick,
  Code
} from 'lucide-react';

export function Highlight({
  icon: Icon,
  heading,
  children,
}: {
  icon: LucideIcon;
  heading: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="border-l border-t border-b px-6 py-12 group text-left">
      <div className="mb-4 flex flex-row items-center gap-2 text-fd-muted-foreground">
        <Icon {...{ className: "size-4 transition-transform duration-300 ease-in-out group-hover:scale-125 group-hover:text-primary" }} />
        <h2 className="text-sm font-medium">{heading}</h2>
      </div>
      <span className="font-medium">{children}</span>
    </div>
  );
}

export function HighlightFeatures() {
  return (
    <div className="flex flex-col items-center border-x border-t px-4 py-16 text-center">
      <h2 className="mb-12 text-xl font-semibold sm:text-2xl flex items-center gap-2">
        <MousePointerClick className="size-5" /> Highlight Features
      </h2>
      <div className="w-full">
        <div className="grid grid-cols-1 border-r sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-0 w-full">
          {highlights.map((item, index) => (
            <div key={index} className="transition-all duration-500 ease-in-out">
              <Highlight
                icon={item.icon}
                heading={item.heading}
              >
                {item.description}
              </Highlight>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const highlights = [
  {
    icon: RocketIcon,
    heading: "快速发布",
    description: "支持通过BOT一键发布活动，仅需填写标题、简介、时间和地点，即可轻松创建活动。"
  },
  {
    icon: BellDot,
    heading: "多渠道通知",
    description: "支持多种通知方式，包括邮件、短信和第三方渠道推送，确保与会者不错过任何重要信息。"
  },
  {
    icon: BadgeDollarSign,
    heading: "闪电收款",
    description: "集成多种支付方式，支持中国大陆主流支付方式，也支持对接第三方支付API，使主办者更加方便快捷地收取活动费用。"
  },
  {
    icon: PencilLine,
    heading: "Markdown 语法支持",
    description: "平台原生支持 Markdown 语法，您可以使用自定义语法来丰富您的活动内容。"
  },
  {
    icon: Brain,
    heading: "智能推送",
    description: "基于 LLMs 的智能推荐算法，帮助用户快速发现感兴趣的活动，提高活动参与度。"
  },
  {
    icon: Code,
    heading: "开发者友好",
    description: "任何活跃用户都可以通过 API 与平台进行集成，扩展无限可能。"
  }
];