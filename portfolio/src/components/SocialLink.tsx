import { motion } from "motion/react";

type SocialLinkProps = {
  href: string;
  children: React.ReactNode;
};

function SocialLink({ href, children }: SocialLinkProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
    >
      {children}
    </motion.a>
  );
}

export default SocialLink;
