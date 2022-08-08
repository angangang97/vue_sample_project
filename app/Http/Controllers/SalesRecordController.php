<?php

namespace App\Http\Controllers;

use App\Models\SalesRecord;
use Illuminate\Http\Request;

class SalesRecordController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sales_record = SalesRecord::all(['id','category_id','buyer_name','quantity']);
        return response()->json($sales_record);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $sales_record = SalesRecord::create($request->post());
        return response()->json([
            'message'=>'SalesRecord Created Successfully!!',
            'sales_record'=>$sales_record
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SalesRecord  $SalesRecord
     * @return \Illuminate\Http\Response
     */
    public function show(SalesRecord $sales_record)
    {
        return response()->json($sales_record);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SalesRecord  $sales_record
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SalesRecord $sales_record)
    {
        $sales_record->fill($request->post())->save();
        return response()->json([
            'message'=>'SalesRecord Updated Successfully!!',
            'sales_record'=>$sales_record
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SalesRecord  $sales_record
     * @return \Illuminate\Http\Response
     */
    public function destroy(SalesRecord $sales_record)
    {
        $sales_record->delete();
        return response()->json([
            'message'=>'Sales Record Deleted Successfully!!'
        ]);
    }
}