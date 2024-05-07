import React from 'react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "../../ui/dialog"
import { Label } from "../../ui/label";

const AjoutTrai = () => {
  return (
    <Dialog>
        <DialogTrigger asChild>
        <Button size='sm' variant="rafane">Ajouter+</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Ajout soin</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="email">Type(vaccin ou traitement)</Label>
                    <Input type="email" id="email" placeholder="vaccin" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="email">Type traitement ou nom_vaccin</Label>
                    <Input type="email" id="email" placeholder="traitement" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="email">Description</Label>
                    <Input type="email" id="email" placeholder="" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="email">Prix</Label>
                    <Input type="email" id="email" placeholder="10 000ar" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="email">Animal id ou groupe d'animal</Label>
                    <Input type="email" id="email" placeholder="Email" />
                </div>
            </div>
            <DialogFooter>
            <Button className=' text-white ' size='sm' variant='rafane' type="submit">Ajouter</Button>
            <Button   size='sm' variant='destructive' type="submit">Annuler</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>

  )
}

export default AjoutTrai
