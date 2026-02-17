import { useEffect, useState } from 'react';
import { supabase } from '../services/supabase';

export const useSupabase = () => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const { error } = await supabase.from('_health').select('*').limit(1);
        setIsConnected(!error);
      } catch {
        setIsConnected(false);
      }
    };

    checkConnection();
  }, []);

  return { supabase, isConnected };
};
