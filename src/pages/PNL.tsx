import React, { useEffect, useState } from "react";
import { api } from "@/utils/api";
import BottomNav from "@/components/BottomNav";

interface TradeRow {
  id?: number;
  entry_time: string;
  symbol: string;
  type: string;
  quantity: number;
  entry_price: number;
  exit_time: string;
  exit_price: number;
}

const PNL: React.FC = () => {
  const [trades, setTrades] = useState<TradeRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!user.username) {
      setError('No user logged in.');
      setLoading(false);
      return;
    }
    api.get(`/trade-history/${user.username}/`)
      .then((data) => {
        setTrades(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch trade history.');
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{ color: 'white', textAlign: 'center', marginTop: 40 }}>Loading...</div>;
  if (error) return <div style={{ color: 'red', textAlign: 'center', marginTop: 40 }}>{error}</div>;

  return (
    <div style={{ background: "#121212", color: "white", minHeight: "100vh", padding: 30 }}>
      <h1 style={{ color: "#3399ff", marginBottom: 20 }}>Your Trade History</h1>
      <div style={{ width: "100%", maxWidth: 1100 }}>
        <table style={{
          width: "100%",
          borderCollapse: "collapse",
          backgroundColor: "#1e1e1e",
          borderRadius: 10,
          overflow: "hidden",
        }}>
          <thead>
            <tr>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>ENTRY TIME</th>
              <th style={thStyle}>SYMBOL</th>
              <th style={thStyle}>TYPE</th>
              <th style={thStyle}>QUANTITY</th>
              <th style={thStyle}>ENTRY PRICE</th>
              <th style={thStyle}>EXIT TIME</th>
              <th style={thStyle}>EXIT PRICE</th>
            </tr>
          </thead>
          <tbody>
            {trades.length === 0 ? (
              <tr>
                <td colSpan={8} style={{ color: 'yellow', textAlign: 'center', padding: 20 }}>No trades found.</td>
              </tr>
            ) : trades.map((trade, idx) => (
              <tr key={trade.id} style={idx % 2 === 1 ? { backgroundColor: "#141414" } : {}}>
                <td style={tdStyle}>{trade.id}</td>
                <td style={tdStyle}>{new Date(trade.entry_time).toLocaleString()}</td>
                <td style={tdStyle}>{trade.symbol}</td>
                <td style={tdStyle}>{trade.type}</td>
                <td style={tdStyle}>{trade.quantity}</td>
                <td style={tdStyle}>{trade.entry_price}</td>
                <td style={tdStyle}>{new Date(trade.exit_time).toLocaleString()}</td>
                <td style={tdStyle}>{trade.exit_price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const thStyle: React.CSSProperties = {
  backgroundColor: "#222",
  color: "yellow",
  padding: "12px 16px",
  textAlign: "center",
};

const tdStyle: React.CSSProperties = {
  padding: "12px 16px",
  textAlign: "center",
};

export default PNL;
