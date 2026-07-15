import { useState } from 'react';
import { Lock } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { checkPassword, unlock, type LockKey } from '@/lib/access';

interface PasswordDialogProps {
  lockKey: LockKey | null;
  onClose: () => void;
  onSuccess: (key: LockKey) => void;
}

const COPY: Record<LockKey, { title: string; text: string; showSubscribe?: boolean }> = {
  mentoring: {
    title: 'Área Premium',
    text: 'Caso você possua o Plano PREMIUM, solicite a senha ao Fabricio Moura e acesse essa área exclusiva.',
  },
  bioimpedance: {
    title: 'Área Premium',
    text: 'Caso você possua o Plano com Bioimpedância, solicite a senha ao Fabricio Moura e acesse essa área exclusiva! Caso queira, pode assinar o plano de bioimpedância mensal, no valor de R$29,90 por mês.',
    showSubscribe: true,
  },
};

const PasswordDialog = ({ lockKey, onClose, onSuccess }: PasswordDialogProps) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const copy = lockKey ? COPY[lockKey] : null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lockKey) return;
    if (checkPassword(lockKey, value)) {
      unlock(lockKey);
      setValue('');
      setError('');
      onSuccess(lockKey);
    } else {
      setError('Senha incorreta.');
    }
  };

  return (
    <Dialog
      open={!!lockKey}
      onOpenChange={(open) => {
        if (!open) {
          setValue('');
          setError('');
          onClose();
        }
      }}
    >
      <DialogContent className="border-amber-500/30 bg-zinc-900 text-white">
        <DialogHeader>
          <div className="flex flex-col items-center gap-2">
            <Lock className="mb-2 h-10 w-10 text-amber-400" />
            <DialogTitle className="text-center text-white">{copy?.title}</DialogTitle>
            <p className="mb-2 text-center text-sm text-zinc-300">{copy?.text}</p>
          </div>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3">
          <input
            type="password"
            className="w-full max-w-xs rounded border border-amber-400 bg-zinc-800 px-3 py-2 text-white placeholder:text-amber-400/70 focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="Senha"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autoFocus
          />
          {error && <span className="text-sm text-red-500">{error}</span>}
          <div className="flex w-full justify-center gap-2">
            <button
              type="submit"
              className="rounded border border-amber-400 bg-amber-400 px-6 py-2 font-semibold text-black shadow-lg transition-all hover:bg-black hover:text-amber-400"
            >
              Entrar
            </button>
            {copy?.showSubscribe && (
              <button
                type="button"
                className="rounded border border-blue-600 bg-blue-600 px-6 py-2 font-semibold text-white shadow-lg transition-all hover:bg-white hover:text-blue-600"
                onClick={() =>
                  window.open(
                    'https://wa.me/+5511914880872?text=Oi%20Fabricio%2C%20gostaria%20de%20fazer%20o%20plano%20de%20bioimped%C3%A2ncia.',
                    '_blank'
                  )
                }
              >
                Assinar
              </button>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PasswordDialog;
