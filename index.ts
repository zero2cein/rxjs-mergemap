import './style.css';

import { fromEvent, mergeMap, map } from 'rxjs';
const fnameInput = document.getElementById('fname');
const lnameInput = document.getElementById('lname');
const resultSpan = document.querySelector('span');

const fname$ = fromEvent(fnameInput, 'input');

const lname$ = fromEvent(lnameInput, 'input');

/**
 * MergeMap
 * 1) Source Observale
 * 2) Inner Observable
 * Source Observable emits - Do Nothing
 * Inner Observable emits - take Source, take inner - filter, map - go to town
 * Eg: Only when the user types in last name then do something with fname, lname
 */
fname$
  .pipe(
    mergeMap((fname: any) =>
      lname$.pipe(
        map((lname: any) => {
          return `Full Name: ${fname.target.value} ${lname.target.value}`;
        })
      )
    )
  )
  .subscribe((result: any) => (resultSpan.textContent = result));
