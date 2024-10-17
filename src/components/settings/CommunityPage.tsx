import { useTranslation } from 'react-i18next';

import { BasicPage } from './common';
import { GitHubLink } from "@/components/githubLink";

export function CommunityPage() {
  const { t } = useTranslation();

  return (
    <BasicPage
      title={t("Community")}
      description={t("community_desc", "Únete a la comunidad de Play Code para conectarte con otras personas que les apasiona la tecnología.")}
    >
      <ul role="list" className="divide-y divide-gray-100 max-w-xs">
        <li className="py-4">
          <a
            href="https://playcode.com.ar/"
            target="_blank"
            className="rounded bg-indigo-600 px-2 py-1 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
            {t("Sitio Web")}
          </a>
        </li>
        <li className="py-4">
          <a
            href="https://www.instagram.com/playcodelatam/"
            target="_blank"
            className="rounded bg-indigo-600 px-2 py-1 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
            {t("Instagram")}
          </a>
        </li>
        <li className="py-4">
          <a
            href="https://discord.gg/bKpAGHwnnf"
            target="_blank"
            className="rounded bg-indigo-600 px-2 py-1 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
            {t("Discord")}
          </a>
        </li>
      </ul>
    </BasicPage>
  );
}
