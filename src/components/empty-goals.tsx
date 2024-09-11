import logo from '../assets/logo-in-orbit.svg'
import letsStart from '../assets/lets-start-illustration.svg'
import { DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="in.orbit" />

      <img src={letsStart} alt="Lets Start" />

      <p className="text-zinc-350 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>

      <DialogTrigger asChild>
        <Button>Cadastrar Meta</Button>
      </DialogTrigger>
    </div>
  )
}
