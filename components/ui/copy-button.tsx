import { Button } from '@/components/ui/button'
import { Copy } from 'lucide-react'
import { toast } from 'sonner'
import { useTranslation } from 'react-i18next'

interface CopyButtonProps {
  content: string | undefined
  successMessage?: string
  title?: string
  disabled?: boolean
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

export function CopyButton({
  content,
  successMessage,
  title,
  disabled,
  variant = 'outline',
  size = 'sm'
}: CopyButtonProps) {
  const { t } = useTranslation()
  const handleCopy = () => {
    if (content) {
      navigator.clipboard.writeText(content)
      toast.success(successMessage || t('common.copiedToClipboard'), {
        duration: 2000,
        position: 'top-center',
      })
    }
  }

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleCopy}
      disabled={disabled || !content}
      title={title || t('common.copyContent')}
    >
      <Copy className="h-4 w-4 " />
    </Button>
  )
}