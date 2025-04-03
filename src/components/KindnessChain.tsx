
import { useMemo } from "react";

interface Node {
  id: string;
  color: string;
  size: number;
  x: number;
  y: number;
}

interface Link {
  source: string;
  target: string;
}

interface KindnessChainProps {
  data: {
    nodes: Node[];
    links: Link[];
  };
}

const KindnessChain = ({ data }: KindnessChainProps) => {
  const { nodes, links } = data;

  // Generate SVG paths for links
  const svgLinks = useMemo(
    () =>
      links.map((link, i) => {
        const source = nodes.find((n) => n.id === link.source);
        const target = nodes.find((n) => n.id === link.target);
        
        if (!source || !target) return null;
        
        return (
          <path
            key={`link-${i}`}
            d={`M${source.x},${source.y} C${(source.x + target.x) / 2},${source.y} ${
              (source.x + target.x) / 2
            },${target.y} ${target.x},${target.y}`}
            stroke="url(#kindnessGradient)"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
            strokeDasharray="0,0"
            className="animate-dash"
          />
        );
      }),
    [links, nodes]
  );

  // Generate SVG circles for nodes
  const svgNodes = useMemo(
    () =>
      nodes.map((node) => (
        <g key={node.id}>
          <circle
            cx={node.x}
            cy={node.y}
            r={node.size}
            fill={node.color}
            opacity="0.8"
          />
          <circle
            cx={node.x}
            cy={node.y}
            r={node.size + 2}
            fill="none"
            stroke={node.color}
            opacity="0.3"
            className="animate-pulse"
          />
        </g>
      )),
    [nodes]
  );

  return (
    <div className="w-full h-full overflow-hidden rounded-xl border border-muted bg-muted/10 relative">
      <svg width="100%" height="100%" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="kindnessGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2DD4BF" />
            <stop offset="50%" stopColor="#9B87F5" />
            <stop offset="100%" stopColor="#FEC6A1" />
          </linearGradient>
        </defs>
        {svgLinks}
        {svgNodes}
      </svg>
      <div className="absolute bottom-4 right-4 bg-white/90 rounded-lg p-3 shadow-md">
        <h3 className="text-sm font-medium">Your Kindness Reach</h3>
        <p className="text-xs text-muted-foreground">7 direct impacts, 23 chain impacts</p>
      </div>
    </div>
  );
};

export default KindnessChain;
