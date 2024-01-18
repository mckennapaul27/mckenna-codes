import Image from 'next/image';
import { buildUrl } from 'cloudinary-build-url';

export const NextImage = ({ ...props }) => {
    const { alt, width, height, src } = props;
    const imgId =
        `${'bunker-cms-personal'}/` +
        src
            .split('')
            .slice(src.lastIndexOf('/') + 1, src.lastIndexOf('.'))
            .join('');

    const url = buildUrl(imgId, {
        cloud: {
            cloudName: 'dohhxsjei',
        },
    });
    const urlBlurred = buildUrl(imgId, {
        cloud: {
            cloudName: 'dohhxsjei',
        },
        transformations: {
            effect: {
                name: 'blur',
                value: 1000,
            },
            quality: 5,
        },
    });

    return (
        <div
            style={{
                maxWidth: `${width}px`,
                display: 'block',
                paddingBottom: '26px',
                paddingTop: '16px',
            }}
        >
            <div
                style={{
                    position: 'relative',
                    height: 0,
                    paddingTop: `${(height / width) * 100}%`,
                    backgroundImage: `url(${urlBlurred})`,
                    backgroundPosition: 'center center',
                    backgroundSize: '100%',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        width: '100%',
                    }}
                >
                    <div
                        style={{
                            // need this extra wrapper so that we provide Image with relative parent
                            position: 'relative',
                            height: '100%',
                            width: '100%',
                            filter: `drop-shadow(2px 2px 12px rgba(0, 0, 0, 0.15))`,
                        }}
                    >
                        <Image src={url} alt={alt} fill />
                    </div>
                </div>
            </div>
        </div>
    );
};
