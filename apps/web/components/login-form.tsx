"use client"

import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Checkbox } from './ui/checkbox'
import { Field, FieldGroup, FieldLabel } from './ui/field'
import { Separator } from './ui/separator'
import { Label } from './ui/label'
import { Chromium } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function LoginForm() {

    const Router = useRouter();

    return (
        <div className='border px-4 py-10 gap-y-2 w-120 h-fit flex flex-col rounded-sm bg-white border-neutral-200'>
            <h1 className='text-3xl font-bold uppercase text-center mb-4'>Login</h1>

            <div className='flex flex-col gap-y-4'>

                <div className='flex flex-col gap-y-4'>

                    <div className='flex flex-col gap-y-1'>
                        <Label htmlFor="email" className='text-neutral-600'>Email</Label>
                        <Input type="email" className='bg-white' placeholder="Digite seu email" />
                    </div>

                    <div className='flex flex-col gap-y-1'>
                        <Label htmlFor="password" className='text-neutral-600'>Senha</Label>
                        <Input type="password" className='bg-white' placeholder="Digite sua senha" />
                        <div className='flex w-full items-center justify-between text-sm text-neutral-600 mt-1'>
                            <FieldGroup className="w-56">
                                <Field orientation="horizontal">
                                    <Checkbox
                                        id="terms-checkbox-basic"
                                        name="terms-checkbox-basic"
                                    />
                                    <FieldLabel htmlFor="terms-checkbox-basic" className='text-neutral-600'>
                                        Lembrar de mim
                                    </FieldLabel>
                                </Field>
                            </FieldGroup>
                            <Button variant="link" onClick={() => Router.push('/forgot-password')}>Esqueci minha senha</Button>
                        </div>
                    </div>
                </div>

                <Button className='bg-blue-500 hover:bg-blue-600 text-white'>Entrar</Button>

                <div className='flex my-2 items-center'>
                    <Separator className='flex-1' />
                    <span className='mx-2 text-neutral-500'>ou</span>
                    <Separator className='flex-1' />
                </div>

                <Button variant="outline" className='border-neutral-300 text-neutral-600 hover:bg-neutral-100'>
                    Entrar com Google <Chromium size={16} />
                </Button>
            </div>
        </div>
    )
}
