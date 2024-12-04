type CircleLinkProps = {
    href: string;
    src: string;
    alt: string;
    className: string;
};

export const CircleLink: React.FC<CircleLinkProps> = ({ href, src, alt, className }) => {
    return (
        <a className={`reg__link ${className}`} href={href}>
            <img src={src} alt={alt} />
        </a>
    );
};