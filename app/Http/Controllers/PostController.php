<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Post;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Auth;


class PostController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return Inertia::render('post/index', [
            'posts' => Post::latest()->paginate(10),
        ]);
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    if (Auth::check() == false) {
      return redirect()->route('login')
        ->with('status', 'You must be logged in to create a post.');
    }

    $request->validate([
      'title' => 'required|max:255',
      'summary' => 'required|max:255',
      'body' => 'required',
    ]);
    Post::create([
        'user_id' => Auth::id(), // or auth()->id()
        'title' => $request->title,
        'summary' => $request->summary,
        'body' => $request->body,
    ]);
    return redirect()->route('posts.index')
      ->with('status', 'Post created successfully.');
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, $id)
  {
    $request->validate([
      'title' => 'required|max:255',
      'summary' => 'required|max:255',
      'body' => 'required',
    ]);
    $post = Post::find($id);
    $post->update($request->all());
    return redirect()->route('posts.index')
      ->with('status', 'Post updated successfully.');
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id)
  {
    $post = Post::find($id);
    $post->delete();
    return redirect()->route('posts.index')
      ->with('status', 'Post deleted successfully');
  }

  // routes functions
  /**
   * Show the form for creating a new post.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    return Inertia::render('post/create');
    //return view('posts.create');
  }

  /**
   * Display the specified resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function show(Post $Post)
  {
        return Inertia::render('post/show', [
            'post' => $Post,
            'html' => $Post->html,
        ]);
  }

  /**
   * Show the form for editing the specified post.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function edit(Post $Post)
  {
    return Inertia::render('post/edit', [
      'post' => $Post,
    ]);
    //$post = Post::find($id);
    //return view('posts.edit', compact('post'));
  }
}