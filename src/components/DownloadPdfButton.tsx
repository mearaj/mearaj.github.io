import { Button, Box } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { motion, useReducedMotion } from 'framer-motion';
import { exportElementToPdfPaged } from '../utils/exportPdf';

export default function DownloadPdfButton({ containerId }: { containerId: string }) {
  const reduceMotion = useReducedMotion();

  const onClick = async () => {
    const el = document.getElementById(containerId);
    if (!el) return alert(`Container #${containerId} not found`);
    await exportElementToPdfPaged(el, {
      page: 'a4',
      marginMm: 6,
      scale: 2,
    });
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', pt: 1 }}>
      <Button
        component={reduceMotion ? 'button' : motion.button}
        whileHover={reduceMotion ? undefined : { scale: 1.04, y: -2 }}
        whileTap={reduceMotion ? undefined : { scale: 0.98 }}
        variant="contained"
        size="large"
        className="btn-shine"
        startIcon={<DownloadIcon />}
        onClick={onClick}
        sx={{
          px: 3,
          py: 1.25,
          borderRadius: 3,
          fontWeight: 700,
          background: 'linear-gradient(135deg, #7c5cff 0%, #5b3fd4 50%, #0ea5e9 100%)',
          boxShadow: '0 8px 32px rgba(124,92,255,0.45)',
          '&:hover': {
            boxShadow: '0 12px 40px rgba(124,92,255,0.55)',
          },
        }}
      >
        Download PDF
      </Button>
    </Box>
  );
}
