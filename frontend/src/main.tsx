import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './core/styles/index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ModalProvider } from './core/context/ModalContext.tsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,  // Số lần retry khi gọi API không thành công
      refetchOnWindowFocus: false,  // Không tải lại khi chuyển tab
      staleTime: 5 * 60 * 1000,  // Dữ liệu sẽ được coi là mới trong 5 phút
    },
  },
});


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <App />
      </ModalProvider>
    </QueryClientProvider>
  </StrictMode>,
)
