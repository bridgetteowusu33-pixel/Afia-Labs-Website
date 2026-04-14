import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import fs from 'node:fs';
import path from 'node:path';

// Resolve font relative to the project root. process.cwd() is the Astro project
// root during both dev and build, so this survives Vite bundling where
// import.meta.url does not.
const fontPath = path.resolve(process.cwd(), 'src/assets/fonts/Inter-Bold.ttf');
const interBold = fs.readFileSync(fontPath);

const colors = {
  bg: '#0B1020',
  bgMid: '#1A1040',
  purple: '#7c3aed',
  purpleGlow: '#a78bfa',
  gold: '#f59e0b',
  white: '#FFFFFF',
  whiteDim: 'rgba(255, 255, 255, 0.65)',
  whiteFaint: 'rgba(255, 255, 255, 0.35)',
};

export interface OgImageInput {
  title: string;
  eyebrow?: string;
  subtitle?: string;
}

export async function renderOgPng({ title, eyebrow, subtitle }: OgImageInput): Promise<Buffer> {
  const markup = {
    type: 'div',
    props: {
      style: {
        display: 'flex',
        flexDirection: 'column',
        width: '1200px',
        height: '630px',
        padding: '72px',
        backgroundImage: `linear-gradient(135deg, ${colors.bg} 0%, ${colors.bgMid} 100%)`,
        color: colors.white,
        fontFamily: 'Inter',
        position: 'relative',
      },
      children: [
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              position: 'absolute',
              top: '-160px',
              right: '-160px',
              width: '640px',
              height: '640px',
              borderRadius: '50%',
              backgroundImage: `radial-gradient(circle, ${colors.purple}33 0%, ${colors.purple}00 70%)`,
            },
          },
        },
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              position: 'absolute',
              bottom: '-120px',
              left: '-120px',
              width: '520px',
              height: '520px',
              borderRadius: '50%',
              backgroundImage: `radial-gradient(circle, ${colors.gold}22 0%, ${colors.gold}00 70%)`,
            },
          },
        },
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              marginBottom: '24px',
              fontSize: '22px',
              fontWeight: 700,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: colors.purpleGlow,
            },
            children: eyebrow ?? 'AFIA LABS',
          },
        },
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              fontSize: title.length > 80 ? '56px' : title.length > 50 ? '66px' : '76px',
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-2px',
              marginBottom: '24px',
              maxWidth: '1050px',
              color: colors.white,
            },
            children: title,
          },
        },
        subtitle
          ? {
              type: 'div',
              props: {
                style: {
                  display: 'flex',
                  fontSize: '28px',
                  fontWeight: 500,
                  lineHeight: 1.4,
                  maxWidth: '980px',
                  color: colors.whiteDim,
                },
                children: subtitle,
              },
            }
          : null,
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              position: 'absolute',
              bottom: '72px',
              left: '72px',
              right: '72px',
              alignItems: 'center',
              justifyContent: 'space-between',
            },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    fontSize: '26px',
                    fontWeight: 800,
                    letterSpacing: '-0.5px',
                    color: colors.white,
                  },
                  children: 'afialabs.net',
                },
              },
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    fontSize: '20px',
                    fontWeight: 600,
                    color: colors.whiteFaint,
                  },
                  children: 'MemeScanr · iOS photo cleaner',
                },
              },
            ],
          },
        },
      ].filter(Boolean),
    },
  };

  const svg = await satori(markup as Parameters<typeof satori>[0], {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: 'Inter',
        data: interBold,
        weight: 700,
        style: 'normal',
      },
    ],
  });

  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: 1200 },
  });

  return resvg.render().asPng();
}
