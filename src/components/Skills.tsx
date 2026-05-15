import { Container, Box, Typography, Stack, Chip } from '@mui/material';
import { portfolio } from '../data/portfolio';
import ScrollReveal from './motion/ScrollReveal';
import { StaggerContainer, StaggerItem } from './motion/Stagger';

type SkillGroupProps = {
  title: string;
  skills: string[];
  prefix: string;
};

function SkillGroup({ title, skills, prefix }: SkillGroupProps) {
  return (
    <Box sx={{ mb: { xs: 3, md: 5 } }}>
      <ScrollReveal direction="up" delay={0.05}>
        <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
          {title}
        </Typography>
      </ScrollReveal>
      <StaggerContainer className="skill-chips" stagger={0.04}>
        <Stack direction="row" flexWrap="wrap" gap={1.25}>
          {skills.map((s) => (
            <StaggerItem key={`${prefix}-${s}`}>
              <Chip label={s} className="skill-chip" sx={{ fontWeight: 600 }} />
            </StaggerItem>
          ))}
        </Stack>
      </StaggerContainer>
    </Box>
  );
}

export default function Skills() {
  return (
    <Container id="skills" disableGutters sx={{ scrollMarginTop: 96 }}>
      <ScrollReveal direction="scale">
        <Typography variant="h3" fontWeight={800} sx={{ mb: { xs: 3, md: 4 } }}>
          My Skills
        </Typography>
      </ScrollReveal>

      <SkillGroup title="Gained through experience" skills={portfolio.skillsGained} prefix="exp" />
      <SkillGroup title="I am good at" skills={portfolio.skillsGoodAt} prefix="good" />
      <SkillGroup title="I love" skills={portfolio.skillsILove} prefix="love" />
    </Container>
  );
}
