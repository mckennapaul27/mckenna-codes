import {
    ArrowTrendingUpIcon,
    BoltIcon,
    ChartBarIcon,
    CodeBracketIcon,
    CommandLineIcon,
    EnvelopeIcon,
    FaceSmileIcon,
    FolderIcon,
    MapPinIcon,
    MegaphoneIcon,
    PaperAirplaneIcon,
    PuzzlePieceIcon,
    QueueListIcon,
    RocketLaunchIcon,
} from '@heroicons/react/24/outline';

type IconType =
    | typeof ArrowTrendingUpIcon
    | typeof CodeBracketIcon
    | typeof CommandLineIcon
    | typeof MapPinIcon
    | typeof QueueListIcon
    | typeof RocketLaunchIcon
    | typeof ChartBarIcon
    | typeof PuzzlePieceIcon
    | typeof PaperAirplaneIcon;

// Record is a utility type provided by TypeScript. It's used to create a type for objects where the property keys are strings (or numbers), and the property values are of a certain type.

// The syntax for Record is Record<K, T>, where K is the type of the keys and T is the type of the values.

const icons: Record<string, IconType> = {
    'code-bracket': CodeBracketIcon,
    'command-line': CommandLineIcon,
    'queue-list': QueueListIcon,
    'rocket-launch': RocketLaunchIcon,
    'map-pin': MapPinIcon,
    'arrow-trending-up': ArrowTrendingUpIcon,
    'chart-bar': ChartBarIcon,
    'puzzle-piece': PuzzlePieceIcon,
    'paper-airplane': PaperAirplaneIcon,
    megaphone: MegaphoneIcon,
    folder: FolderIcon,
    'envelope-open': EnvelopeIcon,
    'face-smile': FaceSmileIcon,
    bolt: BoltIcon,
};

export const iconLookUp = (
    icon: string,
    width: string,
    height: string,
    display?: string,
    color?: string
) => {
    const Icon = icons[icon];
    return Icon ? (
        <Icon
            style={{
                width: width ? width : '24px',
                height: height ? height : '24px',
                display: display,
                color: color,
            }}
        />
    ) : null;
};
