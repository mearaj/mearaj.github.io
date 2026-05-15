import { Box, Typography } from '@mui/material';
import type { SocialLinkItem } from '../data/socialLinks';
import type { RevealDirection } from './motion/ScrollReveal';
import ScrollReveal from './motion/ScrollReveal';

type Props = {
  item: SocialLinkItem;
  index: number;
};

function imageDirection(index: number): RevealDirection {
  return index % 2 === 0 ? 'left' : 'right';
}

export default function SocialLinkSection({ item, index }: Props) {
  const imgFrom = imageDirection(index);

  return (
    <Box
      id={item.id}
      component="section"
      className="social-card"
      sx={{ pb: { md: 3 }, scrollMarginTop: 96, minWidth: 0, maxWidth: '100%' }}
    >
      <ScrollReveal direction="up" delay={0.05}>
        <Typography variant="h3" fontWeight={800} sx={{ mb: { xs: 1.5, md: 3 } }}>
          {item.title}
        </Typography>
      </ScrollReveal>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, md: 3 } }}>
        <ScrollReveal direction={imgFrom} duration={0.75}>
          <Box
            component="a"
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${item.title} profile`}
            className="social-card-image-link"
            sx={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
          >
            <Box
              component="img"
              src={item.image}
              alt={`${item.title} profile screenshot`}
              loading="lazy"
              decoding="async"
              className="social-card-image"
            />
          </Box>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.12}>
          <Box
            component="a"
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="link social-card-link"
          >
            {item.href}
          </Box>
        </ScrollReveal>
      </Box>
    </Box>
  );
}
