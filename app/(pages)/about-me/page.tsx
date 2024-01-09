import { ContentBlock } from '@/app/page-sections/ContentBlock';
import { HeroAlt } from '@/app/page-sections/HeroAlt';
import { SimpleCTA } from '@/app/page-sections/SimpleCTA';
import { Skills } from '@/app/page-sections/Skills';
import { SkillsBlock } from '@/app/page-sections/SkillsBlock';

export default function Page() {
    return (
        <>
            <HeroAlt />
            <Skills />
            <SkillsBlock />
            <ContentBlock />
            <SimpleCTA />
        </>
    );
}
