type SocialLinkProps = {
  href: string;
  children: React.ReactNode;
};

function SocialLink({ href, children }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="transition hover:scale-102"
    >
      {children}
    </a>
  );
}

export default SocialLink;
