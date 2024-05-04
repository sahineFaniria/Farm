import React from 'react'
import { Button } from '../../ui/button';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from '../../ui/table';



const Bonne = () => {
  return (
    <div>
        <Button className=" text-white -mt-3 mb-3" variant="rafane" size="sm" >Ajouter+</Button>
        <Button className=" bg-white  ml-3 mr-3" variant="ghost" size="sm" >~~Filtrer</Button>
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[100px]">catégorie</TableHead>
                <TableHead className="text-center">Type</TableHead>
                <TableHead>Sexe</TableHead>
                <TableHead>Age</TableHead>
                <TableHead className="text-start">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow className="" >
                    <TableCell className="font-medium">Mammifères</TableCell>
                    <TableCell className="text-center">Chèvre</TableCell>
                    <TableCell>M</TableCell>
                    <TableCell className="">3 ans</TableCell>
                    <TableCell className="text-start">Modifier</TableCell>
                </TableRow>

                <TableRow>
                    <TableCell className="font-medium">Volaille</TableCell>
                    <TableCell className="text-center">Dindes</TableCell>
                    <TableCell>F</TableCell>
                    <TableCell className="">1 an</TableCell>
                    <TableCell className="text-start">Modifier</TableCell>

                </TableRow>

                <TableRow>
                    <TableCell className="font-medium">Mammifères</TableCell>
                    <TableCell className="text-center">Mouton</TableCell>
                    <TableCell>F</TableCell>
                    <TableCell className="">6 mois</TableCell>
                    <TableCell className="text-start">Modifier</TableCell>

                </TableRow>

                <TableRow>
                    <TableCell className="font-medium">Mammifères</TableCell>
                    <TableCell className="text-center">Chèvre</TableCell>
                    <TableCell>M</TableCell>
                    <TableCell className="">4 ans</TableCell>
                    <TableCell className="text-start">Modifier</TableCell>

                </TableRow>

                <TableRow>
                    <TableCell className="font-medium">Volaille</TableCell>
                    <TableCell className="text-center">Canard</TableCell>
                    <TableCell>F</TableCell>
                    <TableCell className="">2 ans</TableCell>
                    <TableCell className="text-start">Modifier</TableCell>

                </TableRow>

                <TableRow>
                    <TableCell className="font-medium">Mammifères</TableCell>
                    <TableCell className="text-center">Mouton</TableCell>
                    <TableCell>M</TableCell>
                    <TableCell className="">1.5 ans</TableCell>
                    <TableCell className="text-start">Modifier</TableCell>

                </TableRow>

                <TableRow>
                    <TableCell className="font-medium">Volaille</TableCell>
                    <TableCell className="text-center">Poulet</TableCell>
                    <TableCell>F</TableCell>
                    <TableCell className="">9 mois</TableCell>
                    <TableCell className="text-start">Modifier</TableCell>

                </TableRow>

                <TableRow>
                    <TableCell className="font-medium">Volaille</TableCell>
                    <TableCell className="text-center">Canard</TableCell>
                    <TableCell>F</TableCell>
                    <TableCell className="">8 mois</TableCell>
                    <TableCell className="text-start">Modifier</TableCell>

                </TableRow>

                <TableRow>
                    <TableCell className="font-medium">Mammifères</TableCell>
                    <TableCell className="text-center">Boeuf</TableCell>
                    <TableCell>M</TableCell>
                    <TableCell className="">5 ans</TableCell>
                    <TableCell className="text-start">Modifier</TableCell>

                </TableRow>
            </TableBody>
        </Table>
    </div>
  )
}

export default Bonne
