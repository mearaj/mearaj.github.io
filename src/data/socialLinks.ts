import mearajTopcoder from '../assets/mearajTopcoder.png';
import mearajGithub from '../assets/mearajGithub.png';
import mearajFacebook from '../assets/mearajFacebook.png';
import mearajInstagram from '../assets/mearajInstagram.png';
import mearajX from '../assets/mearajX.png';
import mearajLinkedin from '../assets/mearajLinkedin.png';
import mearajGitLab from '../assets/mearajGitLab.png';
import mearajDiscord from '../assets/mearajDiscord.png';
import mearajStackOverflow from '../assets/mearajStackOverflow.png';

export type SocialLinkItem = {
  id: string;
  title: string;
  href: string;
  image: string;
};

export const socialLinks: SocialLinkItem[] = [
  {
    id: 'topcoder',
    title: 'Topcoder',
    href: 'https://profiles.topcoder.com/mearaj',
    image: mearajTopcoder,
  },
  {
    id: 'github',
    title: 'GitHub',
    href: 'https://github.com/mearaj',
    image: mearajGithub,
  },
  {
    id: 'facebook',
    title: 'Facebook',
    href: 'https://www.facebook.com/mearajbhagad/',
    image: mearajFacebook,
  },
  {
    id: 'instagram',
    title: 'Instagram',
    href: 'https://www.instagram.com/bmearaj/',
    image: mearajInstagram,
  },
  {
    id: 'x',
    title: 'X (Twitter)',
    href: 'https://x.com/mearajbhagad',
    image: mearajX,
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mearajbhagad/',
    image: mearajLinkedin,
  },
  {
    id: 'gitlab',
    title: 'GitLab',
    href: 'https://gitlab.com/mearajbhagad',
    image: mearajGitLab,
  },
  {
    id: 'discord',
    title: 'Discord',
    href: 'https://discord.com/users/mearaj',
    image: mearajDiscord,
  },
  {
    id: 'stackoverflow',
    title: 'Stack Overflow',
    href: 'https://stackoverflow.com/users/2875070/mearaj?tab=profile',
    image: mearajStackOverflow,
  },
];
