'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'

export default function LanguageSwitcher() {

    const router = useRouter()
    const pathname = usePathname()



    const switchLocale = (newLocale: string) => {
        const newPathname = pathname.replace(/^\/[a-z]{2}/, `/${newLocale}`);
        router.push(newPathname);
    }

    return (
        <div className="flex h-5 items-center space-x-4 text-small gap-3 p-5 md:p-2 ">
            <div className="hover:hover:scale-130 text-2xl" onClick={() => switchLocale('en')}>🇺🇸</div>

            <div className="hover:hover:scale-130 text-2xl" onClick={() => switchLocale('es')}>🇲🇽</div>
        </div>
    )
}
